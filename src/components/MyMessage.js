const MyMessage = ({ message }) => {
  console.log(message);
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#1fab89",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;