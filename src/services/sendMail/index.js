const email = "jesus152006@hotmail.com";

export const sendMail = async (data) => {
  return fetch(`https://formsubmit.co/${email}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {      
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
