export const formLogic = (values) => {
	let error = {};
	if (!values.firstName) {
		error.firstName = "Please type in your first name" 
	}
	if (!values.lastName) {
        error.lastName = "Please type in your last name" 
	}
	if (!values.email) {
        error.email = "Please fill in a valid email" 
	} else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
        error.email = "Email address is invalid" 
	} else if (values.email[0].includes(values.email[0].toUpperCase())) {
        error.email = "Email address is invalid" 
	}
	if (!values.message) {
        error.message = "Please type in your message" 
	}
	return error;
};
