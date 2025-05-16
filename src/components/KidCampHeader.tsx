// Remove the unused React import and use JSX directly
import './KidCampStyles.css';

const KidCampHeader = () => {
  return (
    <header className="kidcamp-header relative">
      {/* Floating Clouds */}
      <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
      <i className="fas fa-cloud cloud" style={{ 
        top: '15%', 
        right: '15%', 
        animationDuration: '18s', 
        animationDirection: 'reverse' 
      }}></i>
      
      <h1 className="header-title">Watoto Fun</h1>
      
      <div className="logo-circle">
        <div className="logo-text">PLAY</div>
      </div>
    </header>
  );
};

export default KidCampHeader;
