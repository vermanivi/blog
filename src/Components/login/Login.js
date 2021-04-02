import React from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <section className="login-wrapper">
        <div className="container">
          <div className="login-content">
            <div className="tab"></div>
            <article id="login" className="tab-content"></article>
            <form onSubmit={}>
              <input type="text" placeholder="email" name="email" />
              <input type="password" placeholder="password" name="password" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
