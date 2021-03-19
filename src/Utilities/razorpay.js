import { auth } from "../firebase";

const KEY_ID = 'rzp_test_rJlG2foRLWXei2';
// const KEY_SECRET = 'Ge4J2hQdJawrXsTlh8T3MSzg';

export function makePayment(amount, phoneNumber) {
    console.log(phoneNumber);
    const { displayName, email } = auth.currentUser;
    const options = {
    "key": KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Online Store",
    "description": "Payment for purchase.",
    "image": "https://firebasestorage.googleapis.com/v0/b/tybca-project.appspot.com/o/assets%2Flogo192.png?alt=media&token=c9f93be6-4e71-44c4-84f7-c0169cdfda02",
    //   "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": displayName,
        "email": email,
        "contact": phoneNumber
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#0b3861"
    }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
        console.error(response.error.code);
        console.error(response.error.description);
        console.error(response.error.source);
        console.error(response.error.step);
        console.error(response.error.reason);
        console.error(response.error.metadata.order_id);
        console.error(response.error.metadata.payment_id);
    });

    rzp1.open();
}
