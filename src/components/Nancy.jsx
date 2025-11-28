import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NANCY_SYSTEM_PROMPT } from '../constants/nancyPrompt';
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom';

// Initialize Gemini API outside component
// Use environment variable if available, otherwise user needs to provide their own key
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: NANCY_SYSTEM_PROMPT
}) : null;

const Nancy = ({ isOpen, onClose, portal = true }) => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Nancy. Ready to explore Nimish's world?", sender: 'nancy' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isSending, setIsSending] = useState(false); // Lock to prevent double-firing
    const [characterState, setCharacterState] = useState('IDLE'); // IDLE, THINKING, TALKING
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "Where did Nimish work last?",
        "Tell me about his NotesQuest project.",
        "What are his top skills?"
    ]);
    const videoRef = useRef(null);
    const messagesEndRef = useRef(null);

    // Chat session ref
    const chatSessionRef = useRef(null);

    useEffect(() => {
        // Initialize chat session
        chatSessionRef.current = model.startChat({
            history: [],
        });
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Update character state based on actions
    useEffect(() => {
        if (isSending) {
            setCharacterState('THINKING');
        } else if (isTyping) {
            setCharacterState('TALKING');
        } else {
            setCharacterState('IDLE');
        }
    }, [isSending, isTyping]);

    // Video source mapping
    const getVideoSource = () => {
        switch (characterState) {
            case 'THINKING': return '/nancy_thinking.mp4';
            case 'TALKING': return '/nancy_talking.mp4';
            case 'IDLE': default: return '/nancy_idle.mp4';
        }
    };

    const handleSuggestionClick = (q) => {
        setSuggestedQuestions(prev => prev.filter(sq => sq !== q));
        handleSend(q);
    };

    // Refactor handleSend to accept optional message
    const handleSend = async (messageOverride) => {
        const messageToSend = messageOverride || input;
        if (!messageToSend.trim() || isSending) return; // Prevent double-firing

        // Check if API key is configured
        if (!model) {
            setMessages(prev => [...prev,
            { text: messageToSend, sender: 'user' },
            {
                text: "Nancy is currently unavailable. To use the AI chatbot:\n\n1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey)\n2. Create a `.env` file in the project root\n3. Add: `VITE_GEMINI_API_KEY=your_api_key_here`\n4. Restart the dev server\n\nSorry for the inconvenience!",
                sender: 'nancy'
            }
            ]);
            setInput('');
            return;
        }

        setIsSending(true); // Lock

        setMessages(prev => [...prev, { text: messageToSend, sender: 'user' }]);
        setInput('');
        setIsTyping(true);

        try {
            if (!chatSessionRef.current) {
                chatSessionRef.current = model.startChat({
                    history: [],
                });
            }

            const result = await chatSessionRef.current.sendMessage(messageToSend);
            const response = result.response.text();

            setMessages(prev => [...prev, { text: response, sender: 'nancy' }]);
        } catch (error) {
            console.error("Error generating response:", error);
            let errorMessage = "I'm having trouble connecting. Please try again.";

            if (error.message?.includes("429") || error.status === 429) {
                errorMessage = "Rate limit exceeded (15 requests/min on Free Tier). Please wait a minute and try again.";
            } else if (error.message?.includes("API key")) {
                errorMessage = "API key issue. Please check your configuration.";
            }

            setMessages(prev => [...prev, { text: errorMessage, sender: 'nancy' }]);
        } finally {
            setIsTyping(false);
            setIsSending(false); // Unlock
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    // Prevent background scroll when chat is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Now use a portal so the overlay always covers the screen and isn't clipped
    const nancyModal = (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="aaa-nancy-overlay"
          >
            {/* Close Button */}
            <button onClick={onClose} className="aaa-close-btn">
                <X size={24} />
            </button>
            {/* Dialogue Area (Left on Desktop) */}
            <motion.div
                className="aaa-dialogue-area"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
            >
                {/* Messages */}
                <div className="aaa-messages-scroll">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`aaa-message-bubble ${msg.sender}`}
                        >
                            {msg.sender === 'nancy' && <div className="aaa-speaker-name">Nancy</div>}
                            {msg.sender === 'nancy' ? (
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            ) : (
                                msg.text
                            )}
                        </motion.div>
                    ))}
                    {isTyping && (
                        <div className="aaa-message-bubble nancy typing">
                            <div className="aaa-speaker-name">Nancy</div>
                            <span>.</span><span>.</span><span>.</span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                {/* Suggestion Chips */}
                {suggestedQuestions.length > 0 &&
                <div className="aaa-suggestion-chips">
                    {suggestedQuestions.map((q, idx) => (
                        <button
                            key={idx}
                            className="aaa-chip"
                            onClick={() => handleSuggestionClick(q)}
                        >
                            {q}
                        </button>
                    ))}
                </div>}
                {/* Input Bar */}
                <div className="aaa-input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="aaa-input"
                        autoFocus
                    />
                    <button
                        type="button"
                        onClick={() => handleSend()}
                        onTouchEnd={e => { e.preventDefault(); handleSend(); }}
                        className="aaa-send-btn"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </motion.div>
            {/* Character Container (Right on Desktop) */}
            <motion.div
              className="aaa-character-container"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
                <video
                    ref={videoRef}
                    src={getVideoSource()}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="aaa-character-img"
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                <img
                    src="/nancy_full_body.png"
                    alt="Nancy"
                    className="aaa-character-img"
                    style={{ display: 'none', width: '100vw', height: '100vh', objectFit: 'cover' }}
                />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );

    if (!portal) return nancyModal;
    return ReactDOM.createPortal(nancyModal, document.body);
};

export default Nancy;
