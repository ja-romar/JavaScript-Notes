/* Reemplazando cade "If Else" por "Switch" */

if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }

  /* Quedaria asi como cadena switch */

  switch (val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }
  