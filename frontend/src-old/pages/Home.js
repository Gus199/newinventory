// // import { Layer } from "react-map-gl";
// // import { Link } from "react-router-dom";
// // import Layout from "../components/Layout";

// // import Footer from "../components/Footer";

// // import {FaQuestionCircle,  FaTicketAlt} from 'react-icons/fa'
// import Layout from '../components/Layout';
// import Work from '../components/Work';
// import Section3 from '../components/Section3';

// function Home() {
//   return (
//     <>
//           {/* <section className='sec about' id='services'>
//         <div className='content'>
//       <Work />
//       </div>
//    </section> */}
//    <Section3 />
//     </>
//   );
// }

// export default Home;
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>What do you need help with????</h1>
        <p>Please choose from an option belowLLL</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  )
}

export default Home
