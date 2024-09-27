const User=require('../model/index');

async function handleShowData(req,res){
    const All_Ac=await User.find({});
    return res.json(All_Ac);
}
async function handleSearchData(req, res) {
    const { id } = req.body;

    // Find the user by ID
    const user = await User.findOne({ _id: id });

    // Send the user in the response
    console.log(user);
    return res.json(user);
}

async function handleAddData(req, res) {
    const body = req.body;

    if (!body || !body.Account_no || !body.Name || !body.PIN || !body.IFSC) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const result = await User.create({
            Account_no: body.Account_no,
            PIN: body.PIN,
            IFSC: body.IFSC,
            Name: body.Name
        });
        console.log(result);
        return res.status(200).json({ message: "Successfully inserted data", id: result.id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleDeleteAccout(req, res) {
    const { id } = req.params;
  
    try {
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({ message: "An error occurred", error: error.message });
    }
  }

  async function handleUpdateAccount(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    try {
      // Attempt to find and update the user by ID
      const user = await User.findByIdAndUpdate(id, updateData, {
        new: true, // Return the updated document
        runValidators: true // Validate data against the schema
      });
      return res.json({ message: "Update successful", user });
    } catch (error) {
      return res.status(500).json({ message: "An error occurred", error: error.message });
    }
  }
  
  
module.exports={handleShowData,handleAddData,handleDeleteAccout,handleUpdateAccount,handleSearchData};