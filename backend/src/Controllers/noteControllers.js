import Note from '../model/Note.js';
export async function getallnotes(_,res){
    try {
        const notes= await Note.find().sort({createAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getallnotes controller",error);
        res.status(500).json({message:"internal server error"});
        
    }
}
export async function getnotebyid(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("error in getnotebyid controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export  async function createnote(req,res){
    try { 
        const {title,content}=req.body;
        const note = new Note({title , content});

       const savednote = await note.save();
        res.status(201).json(savednote);
        
    } catch (error) {
        console.error("error in creating note",error);
        res.status(500).json({message:"internal server error"});
    }
}
export async function updatenote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: "note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("error in updating note",error);
        res.status(500).json({message:"internal server error"});
        
    }
 }
export async function deletenote(req,res){
    try {
        const { title, content } = req.body;
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!deletedNote) {
            return res.status(404).json({ message: "note not found" });
        }
        res.status(200).json(deletedNote);
    } catch (error) {
        console.error("error in deleted note",error);
        res.status(500).json({message:"internal server error"});
        
    }
    
}