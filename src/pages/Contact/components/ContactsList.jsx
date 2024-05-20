import React from 'react';
import styles from "./ContactsList.module.scss";
import { contacts } from "../../../constants";

const ContactsList = () => {
  return (
    <section className={styles.contactsList}>
      {Object.keys(contacts).map((name) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
            {contacts[name].map((contact) => {
              return (
                <div key={contact.label}>
                  <h5>{contact.label}</h5>
                  <p>{contact.email}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default ContactsList;

