
import { Link } from "react-router-dom";

function MailboxList({ mailboxes}) {
    return (
      <>
        <h1>Active Mailboxes</h1>
        <ul>
          {mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id}>
              <Link to={`/mailboxes/${currentMailbox._id}`}>
              Mailbox {currentMailbox._id}              
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
  


export default MailboxList;