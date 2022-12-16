import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


// alla routes hära böjar med /users
router.get('/', getUsers);

router.post('/', createUser);

// (':id) Denna : betyder att vad du än skriver efter 
// http://localhost:5000/users/ så kommer det komma fram vare sig http://localhost:5000/users/id eller 
// http://localhost:5000/users/1235123123


router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser );

export default router;