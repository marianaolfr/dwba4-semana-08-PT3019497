class Student {
  constructor(firstName, lastName, studentGrade1, studentGrade2) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentGrade1 = studentGrade1;
    this.studentGrade2 = studentGrade2;
  }

  gradeW() {
    return (this.studentGrade1 * 0.6) + (this.studentGrade2 * 0.4);
  }

  verifySituation() {
    const gradeW = this.gradeW();
    return gradeW > 6 ? "Approved!" : "Disapproved!";
  }

  showFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const students = [
  new Student("Mariana", "Ferreira", 7, 8.5),
  new Student("Mayumi", "Melo", 8, 9.0),
  new Student("Vinicius", "Sena", 6, 7.5),
  new Student("Romulo", "Melo", 9, 8.0),
  new Student("Pedro", "Barauna", 5, 6.5)
];

function showStudents() {
  students.forEach((student, index) => {
    console.log("Student " + (index + 1));
    console.log("Name: " + student.showFullName());
    console.log("Grade: " + student.gradeW().toFixed(2));
    console.log("Situation: " + student.verifySituation());
    console.log("--------------------");
  });
}

// Função para exibir os dados dos alunos na página HTML
function showStudentRecords() {
  // Obtém um elemento HTML pelo ID setado como "students", no caso uma div
  const container = document.getElementById("students");

  // Itera sobre o array de alunos usando forEach
  students.forEach((student, index) => {

    // Cria um novo elemento <div> para representar os dados de um aluno
    const studentDiv = document.createElement("div");

    // Define o conteúdo HTML do elemento studentDiv com informações do aluno
    studentDiv.innerHTML = `
        <h2>Student ${index + 1}</h2>
    `

    // Cria um botão e adiciona um evento de clique para exibir as informações do aluno
    const verifyButton = document.createElement("button");
    verifyButton.textContent = "Verify";
    verifyButton.addEventListener("click", function() {
      alert(`
        Name: ${student.showFullName()}
        Grade: ${student.gradeW().toFixed(2)}
        Situation: ${student.verifySituation()}
      `);
    });

    // Adiciona o botão como filho do studentDiv
    studentDiv.appendChild(verifyButton);

    // Adiciona o elemento studentDiv como um filho do container (div com ID "students")
    container.appendChild(studentDiv);
  });
}

// Chama a função showStudentRecords() para exibir os dados dos alunos na página
showStudentRecords();
