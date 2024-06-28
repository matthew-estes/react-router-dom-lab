import { useParams } from "react-router-dom";

function MailboxDetails(props) {
  const { mailboxId } = useParams();
  console.log(mailboxId);
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <dl>
        <dt>Boxholder: {selectedBox.boxholder}</dt>
        <dd></dd>
        <dt>Box Size: {selectedBox.boxSize}</dt>
        <dd></dd>
      </dl>
    </>
  );
}

export default MailboxDetails;
