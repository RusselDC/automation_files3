class Contact_List 
{
    async user_list()
    {
        return [
            {
                "FirstName": "Juan",
                "LastName":"Dela Cruz",
                "BirthDate":"2000-01-01",
                "Email":"juandelacruz1@gmail.com",
                "Phone":"09111111111",
                "Street1":"Purok 5, San Juan",
                "Street2":"Purok 7, San Sebastian",
                "City":"Malolos",
                "Province":"Bulacan",
                "PostalCode":"3002",
                "Country":"Philippines"
            },
            {
                "FirstName": "Juan 2",
                "LastName":"Dela Cruz 2",
                "BirthDate":"2000-01-02",
                "Email":"juandelacruz2@gmail.com",
                "Phone":"09222222222",
                "Street1":"Purok 4, San Juan",
                "Street2":"Purok 6, San Sebastian",
                "City":"Paombong",
                "Province":"Bulacan",
                "PostalCode":"3001",
                "Country":"Philippines"
            },
            {
                "FirstName": "Juan 2",
                "LastName":"Dela Cruz 3",
                "BirthDate":"2000-01-02",
                "Email":"juandelacruz3@gmail.com",
                "Phone":"09333333333",
                "Street1":"Purok 8, San Juan",
                "Street2":"Purok 9, San Sebastian",
                "City":"Hagonoy",
                "Province":"Bulacan",
                "PostalCode":"3000",
                "Country":"Philippines"
            }
        ]
    }
}

export default new Contact_List()