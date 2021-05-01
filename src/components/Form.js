export default function Form({ spec, handleChange, handleSubmit }) {
  return (
    <div className="col-sm">
      <h3>{spec.header}</h3>
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Nom d'utilisateur</label>
          <input
            type="username"
            className="form-control"
            id={spec.userId}
            aria-describedby="usernameHelp"
            placeholder="Entrez votre nom d'utilisateur"
            value={spec.state.username}
            onChange={handleChange}
          />
          <small id="usernameHelp" className="form-text text-muted">
            Nom d'utilisateur (pas l'email)
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id={spec.passId}
            placeholder="Entrez votre mot de passe"
            autoComplete="new-password"
            value={spec.state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={handleSubmit}
        >
          {spec.btnValue}
        </button>
      </form>
    </div>
  );
}
