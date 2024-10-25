import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer urwVhUKshTyZ3KF02qH_FqoXh9WSRXDSmHzZdei-GkMRuVaFdvf5vHk8D7_qituhtHdHmTY9eXZr0qkT0oOjATRkulc_Prg2y6Dn96Pd5WlN6s4tb9A14wJ1r0IKZnYx",
  },
});
