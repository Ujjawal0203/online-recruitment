const candidatesData = [
    { name: "Ujjawal Kumar", location: "New York", role: "Software Engineer" },
    { name: "Somu Kumar", location: "New York", role: "Software Engineer" },
    { name: "Ujju Raj", location: "San Francisco", role: "Web Developer" },
    { name: "Aman Kumar", location: "Chicago", role: "Data Analyst" },
    { name: "Soni Kumari", location: "Los Angeles", role: "UX Designer" },
  ];
  
  function searchCandidates() {
    
    const candidatesList = document.getElementById("candidates");
    candidatesList.innerHTML = "";
  
  
    const locationInput = document.getElementById("location").value.toLowerCase();
    const roleInput = document.getElementById("role").value.toLowerCase();
  
    
    const filteredCandidates = candidatesData.filter(candidate =>
      candidate.location.toLowerCase().includes(locationInput) &&
      candidate.role.toLowerCase().includes(roleInput)
    );
  
  
    filteredCandidates.forEach(candidate => {
      const listItem = document.createElement("li");
      listItem.textContent = `${candidate.name} - ${candidate.location}, ${candidate.role}`;
      candidatesList.appendChild(listItem);
    });
  }
  