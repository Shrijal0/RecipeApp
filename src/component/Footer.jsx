const Footer = () => {
    const emailAddress = "foodrecipe00@gmail.com"; 
    const phoneNumber = "123-456-7890"; 

    return (
    <footer className="bg-red-700 text-center font-bold text-white p-8 text-lg w-full bottom-0">
      Email: {emailAddress} | Phone: {phoneNumber}
    </footer>
    );
  };
  
  export default Footer;