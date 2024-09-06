// import axios from "axios";
// import { useEffect, useState } from "react";
// import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';

// const Key = 'pk_test_51PqPbd09UchcDwETElBOYBIkALKUNag1aJS23Gn9u0dBnKDT4pmZBGCvUfmFqKz37xnMbA3tYl87WbS65O6rWPSF00L72j4muf'


// export default function Pay() {
//     const navigate = useNavigate();
//     const [stripeToken, setStripeToken] = useState(null);



//     const onToken = (token) =>{
//         setStripeToken(token);
//     };

//     useEffect(() => {
//         const makeRequest = async () => {
//             try {
//                 const res = await axios.post(
//                     "http://localhost:8080/api/v1/checkout/payment", {
//                         tokenId: stripeToken.id,
//                         amount: 20
//                     }
//                 );
//                 console.log(res.data);
//                 navigate("/success");
//             } catch (err) {
//                 console.log(err);
//             }
//         };
    
//         if (stripeToken) {
//             makeRequest();
//         }
    
//     }, [stripeToken, navigate]);

//   return (
//     <>
//         <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
//             {stripeToken ? (<span>Procesando pago....</span>) :(
//                 <StripeCheckout 
//                     name="Ecommerce Estancia" 
//                     image="https://imgs.search.brave.com/EZj_SLPuf146KeJs6Ob4tzXVK9H6qlfK0PLVfnbQRFs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ob21l/LmJsdWVzbmFwLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNy9FQ29tbWVy/Y2UtV2Vic2l0ZS1F/eGFtcGxlcy1BcHBs/ZS5wbmc"
//                     billingAddress
//                     shippingAddress
//                     description=" tu total es 20 MXN"
//                     amount={20}
//                     token={onToken}
//                     stripeKey={Key}
//                 >
//                     <button type="submit">Pay</button>
//                 </StripeCheckout>
//                 )
//             }
            
//         </div>
//     </>
//   )
// }
