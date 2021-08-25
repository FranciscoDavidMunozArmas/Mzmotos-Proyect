import { Router } from 'express';
import * as Controller from '../controller/salesman.controller';
import * as AppointmentController from '../controller/appointment.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/username/:username")
.get(Controller.getByUsername)

router.route("/:id")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

router.route("/appointments/:salesmanid")
    .get(AppointmentController.getAppointments)
    .post(AppointmentController.postAppointment)
    .delete(AppointmentController.deleteAppointments);

router.route("/appointments/:salesmanid/:appointmentid")
    .get(AppointmentController.getAppointment)
    .put(AppointmentController.putAppointments)
    .delete(AppointmentController.deleteAppointment);

export default router;