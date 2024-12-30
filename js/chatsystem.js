function openWhatsAppChat() {
    const phoneNumber = "9518851783"; // Your provided phone number
    const message = "Hello! I would like to get in touch."; // Optional predefined message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

function openPhoneDialer() {
    const phoneNumber = "9518851783"; // Your provided phone number
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // On mobile devices, open the phone dialer
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // On non-mobile devices, show a message
        alert(`You can call this number: ${phoneNumber}`);
    }
}