import styles from '../styles/chatbot.module.css';

const Message = ({ text, isUser }) => {
  const messageClass = isUser ? styles.userMessage : styles.botMessage;

  return (
    <div className={`${styles.message} ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;