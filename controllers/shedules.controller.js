const { EmailSheduleService }=require("../services/emailShedules.service")

class sheduleController {

    getShedules=async (req, res) => {
        try {
            const emailShedules=await EmailSheduleService.find();
            res.status(200).json(emailShedules);
        } catch (error) {
            console.error("Error fetching schedules:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getSingleShedule=async (req, res) => {
        try {
            const shedule=await EmailSheduleService.findById(req.params.id);
            res.status(200).json(shedule);
        } catch (error) {
            console.error("Error fetching schedule:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    createShedule=async (req, res) => {
        try {
            const emailShedule=await EmailSheduleService.create({ ...req.body });
            res.status(200).json(emailShedule);
        } catch (error) {
            console.error("Error posting schedule:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    updateShedule=async (req, res) => {
        try {
            const emailShedule=await EmailSheduleService.findByIdAndUpdate(req.params.id, { ...req.body });
            res.status(200).json(emailShedule);
        } catch (error) {
            console.error("Error updating schedule:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    deleteShedule=async (req, res) => {
        try {
            await EmailSheduleService.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Email Deleted Successfully" });
        } catch (error) {
            console.error("Error deleting schedule:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }

    }
}


module.exports.sheduleController=new sheduleController();