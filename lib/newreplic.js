// lib/newrelic.js
export function initializeNewRelic() {
    if (typeof window !== 'undefined') { // Ensure this runs only in browser
      let NREUM = window.NREUM || {};
      NREUM.init = {
        accountID: "6571153",
        trustKey: "6571153",
        agentID: "594564220",
        licenseKey: "NRJS-f2dc61f12d5450e890d",
        applicationID: "594564220",
        beacon: "bam.nr-data.net",
        errorBeacon: "bam.nr-data.net",
      };
      
      const script = document.createElement('script');
    script.src = 'https://js-agent.newrelic.com/nr-loader-spa-1234.min.js'; // Use latest loader
    script.async = true;
    
    // Append to head
    document.head.appendChild(script);
    }
  }