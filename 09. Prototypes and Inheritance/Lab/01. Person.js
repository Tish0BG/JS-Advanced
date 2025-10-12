function createPerson(initialFirstName, initialLastName) {
    const data = {
        firstName: initialFirstName,
        lastName: initialLastName
    };

    return {
        get firstName() {
            return data.firstName;
        },
        set firstName(newFirstName) {
            data.firstName = newFirstName;
        },

        get lastName() {
            return data.lastName;
        },
        set lastName(newLastName) {
            data.lastName = newLastName;
        },

        get fullName() {
            return `${data.firstName} ${data.lastName}`;
        },
        set fullName(newFullName) {
            const parts = newFullName.trim().match(/^(\S+)\s(\S+)$/);

            if (parts && parts.length === 3) {
                data.firstName = parts[1];
                data.lastName = parts[2];
            }
        }
    };
}