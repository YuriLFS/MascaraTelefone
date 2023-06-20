Funcionalidade:
Máscara para celular ou telefone fixo brasileiro.
Adiciona formatação("(XX) X XXXX-XXXX" ou "(XX) XXXX-XXXX") e verifica se o DDD é válido no país.

Recursos:
TypeScript;
React (ChangeEvent e useState);
Regex;

Utilização de Regex para retirar caracteres do valor e passar por uma validação
de DDD (tabela com os DDDs válidos ao final), valor "0" antes dos outros digitos de DDD
não pode ser incluso.

Números com quantidade de algarismos menor ou maior q o padrão brasileiro será considerado invalido,
sendo o mesmo verifiado com a ultização de Regex e .length.

Mascara do telefone é aplicada ao ser indentificado a quantidade minima de algarismos no valor do 
número de telefone,podendo ser complementado mais um algarismo (caso seja formato de celular).

Abaixo do Input há dois textos que indicam se tudo esta nos conformes.

Tabela com os DDDs válidos:[ 11, 12, 13, 14, 15, 16, 17, 18, 19,
      			                 21, 22, 24, 27, 28, 31, 32, 33, 34,
      			                 35, 37, 38, 41, 42, 43, 44, 45, 46,
                             47, 48, 49, 51, 53, 54, 55, 61, 62,
      			                 64, 63, 65, 66, 67, 68, 69, 71, 73,
      			                 74, 75, 77, 79, 81, 82, 83, 84, 85,
      			                 86, 87, 88, 89, 91, 92, 93, 94, 95,
      			                 96, 97, 98, 99 ]
