import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    default: [],
  }]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;

// Function to create a new conversation
export const createConversation = async (participants) => {
  try {
    // Ensure participants are valid ObjectId strings or convert them
    const formattedParticipants = participants.map(id => {
      if (mongoose.Types.ObjectId.isValid(id)) {
        return mongoose.Types.ObjectId(id);
      } else {
        throw new Error(`Invalid ObjectId: ${id}`);
      }
    });

    const newConversation = new Conversation({
      participants: formattedParticipants,
      messages: [] // Optional, automatically defaults to an empty array
    });

    await newConversation.save();
    console.log("New conversation created successfully:", newConversation);
    return newConversation;
  } catch (error) {
    console.error("Error creating conversation:", error.message);
    throw error; // Rethrow the error to handle it in calling functions if needed
  }
};
