function Erreur404() {
  return (
      <div className="not-found-container">
      <img 
        src="/Erreur-404.png"
        alt="404 Not Found" 
              className="not-found-logo" 
             
      />
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  );
}

export default Erreur404;

