import React from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => (
  <Layout
    title="Signup"
    description="Signup in to Node React E-commerce App"
    className="container-fluid"
  >
    {API}
  </Layout>
);

export default Signup;
