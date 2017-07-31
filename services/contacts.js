import { Permissions, Contacts } from 'expo';

export default async () => {
  let { status } = await Permissions.askAsync(Permissions.CONTACTS);
  if (status !== 'granted') {
    return;
  }
  let contacts = await Contacts.getContactsAsync({
    fields: [Expo.Contacts.PHONE_NUMBERS, Expo.Contacts.EMAILS]
  });
  console.log(contacts);
};
