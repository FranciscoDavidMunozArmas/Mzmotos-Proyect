import { Router } from 'express';
import * as Controller from '../controller/salesman.controller';
import * as AppointmentController from '../controller/appointment.controller';

const router = Router();

router.route("/")
.get(Controller.getSalesmen)
.post(Controller.createSalesman)
.delete(Controller.deleteSalesmen);

router.route("/id/:id")
.get(Controller.getSalesmanByID)
.put(Controller.updateSalesman)
.delete(Controller.deleteSalesmanByID);

router.route("/password/:username")
.put(Controller.updatePassword)

router.route("/username/:username")
.get(Controller.getSalesmanByUsername)

router.route("/appointments/:salesmanid")
    .get(AppointmentController.getAppointments)
    .post(AppointmentController.postAppointment)
    .delete(AppointmentController.deleteAppointments);

router.route("/appointments/:salesmanid/:appointmentid")
    .get(AppointmentController.getAppointment)
    .put(AppointmentController.putAppointments)
    .delete(AppointmentController.deleteAppointment);

export default router;