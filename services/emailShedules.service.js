const { EmailShedule }=require("../models/shedule.model");
const BasicServices=require("./basic.service");
class EmailSheduleService extends BasicServices {
    constructor() {
        super(EmailShedule);
    }
}

module.exports.EmailSheduleService=new EmailSheduleService();