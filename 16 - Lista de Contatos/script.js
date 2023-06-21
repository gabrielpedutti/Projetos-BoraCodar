const filterElement = document.querySelector('#filter')

const contacts = document.querySelectorAll('.personLi')
const contactGroups = document.querySelectorAll('.list-wrapper')

filterElement.addEventListener('input', filterContacts)

function filterContacts() {

    const searchTerm = filterElement.value.toLowerCase()

    contactGroups.forEach(contactGroup => {
        let hasVisibleContacts = false

        contacts.forEach(contact => {
            const name = contact.querySelector('.contact h3').textContent.toLocaleLowerCase()

            if(name.includes(searchTerm)) {
                contact.style.display = 'flex'
                if(contactGroup.contains(contact)) {
                    hasVisibleContacts = true
                }
            } else {
                contact.style.display = 'none'
            }
        })

        if (hasVisibleContacts) {
            contactGroup.style.display = 'flex'
        } else {
            contactGroup.style.display = 'none'
        }
    })

}