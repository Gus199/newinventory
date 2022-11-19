// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getDevices} from '../features/tickets/ticketSlice';
// import Spinner from '../components/shared/Spinner';
// import BackButton from '../components/BackButton';

// function AllDevices({device}) {
//   const { devices, isLoading, isSuccess } = useSelector(
//     (state) => state.devices
//   );
//   console.log(device)

//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       if (isSuccess) {
//         dispatch(reset());
//       }
//     };
//   }, [dispatch, isSuccess]);

//   useEffect(() => {
//     dispatch(getDevices());
//   }, [dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <>
      
//       <div className='all'>AllDevices</div>
//       {device.price}
//       <BackButton url='/' />
//     </>
//   );
// }

// export default AllDevices;
