document.addEventListener('appMobi.contacts.get', contactsReceived, false);

function contactsReceived() {
      var table = document.getElementById("contactsTable");
      table.innerHTML = '';

      var myContacts = AppMobi.contacts.getContactList();

      for(var i=0;i<myContacts.length;i++) {
         var myContacts = AppMobi.contacts.getContactData(myContacts[i]);
         var tr = document.createElement("tr");     
                      
         var msg = document.createElement("td");
         msg.innerHTML = myContacts.name;
         tr.appendChild(msg);
         
         var msg = document.createElement("td");
         msg.innerHTML = myContacts.phones;
         tr.appendChild(msg);
         table.appendChild(tr);
         
         var msg = document.createElement("td");
         msg.innerHTML = myContacts.emails;
         tr.appendChild(msg);
         table.appendChild(tr);
      }
   }