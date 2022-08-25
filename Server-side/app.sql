-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-02-2022 a las 07:23:02
-- Versión del servidor: 10.5.12-MariaDB
-- Versión de PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id18483837_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_breed_list`
--

CREATE TABLE `app_gato_curioso_breed_list` (
  `id` tinyint(11) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `description` varchar(700) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_breed_list`
--

INSERT INTO `app_gato_curioso_breed_list` (`id`, `name`, `picture`, `description`) VALUES
(1, 'Abisinio', 'https://gatocurioso.000webhostapp.com/img/breed/abisinio.jpg', 'El Abisinio es un gato con un aspecto bastante salvaje, su mirada y el jaspeado característico de su pelaje recuerdan fácilmente a la fisionomía del puma. Aunque es un gato sociable y cariñoso, también es un animal muy activo e independiente que en algún '),
(2, 'American Curl', 'https://gatocurioso.000webhostapp.com/img/breed/american_curl.jpg', 'El American curl es el gato de las orejas curvadas. Se trata de una raza muy joven, los primeros cruces se iniciaron en 1980. Goza de gran popularidad en Estados Unidos y en Europa poco a poco se va afianzando. El american curl combina la astucia de su pa'),
(3, 'Angora Turco', 'https://gatocurioso.000webhostapp.com/img/breed/angora_turco.jpg', 'El Angora turco podría ser la raza felina más antigua y origen de muchas de las actuales. Lo cierto es que, de estos bellos animales, ya se tiene constancia en varios países del oriente próximos desde tiempos bizantinos. Como anécdota; la leyenda de que el fundador de Turquía moderna, Mustafá kemal ataturk, regresara al mundo de los vivos reencarnándose en un angora turco.'),
(4, 'Azul Ruso', 'https://gatocurioso.000webhostapp.com/img/breed/azul_ruso.jpg', 'El Azul ruso es considerado el más aristocrático de los gatos. Su hermoso pelaje, sus brillantes ojos verdes y su elegante caminar son sin duda alguna de sus mejores atributos físicos, y si además sumamos su carácter tranquilo y su suave voz, hallaremos la respuesta a tan bien merecido título. '),
(5, 'Balinés', 'https://gatocurioso.000webhostapp.com/img/breed/balines.jpg', '“El garbo y la gracia de este gato me recuerda a las bailarinas balinesas” pensó Helen Smith una de las primeras criadoras del hasta entonces llamado siamés de pelo largo. Sin ser consiente, acababa de dar nombre oficial a esta especie, desde entonces el termino balinés es el usado para referirse a este amistoso felino.  '),
(6, 'Bengalí', 'https://gatocurioso.000webhostapp.com/img/breed/bengali.jpg', 'El Bengalí es popularmente conocido como el gato leopardo, sin lugar a dudas, por el parecido físico con el salvaje felino. Se trata de animales de gran inteligencia, curiosos y juguetones. Les agrada el agua, herencia de sus antepasados selváticos. El porte es elegante, aunque de aspecto fuerte, debido a su musculatura y a la robustez de sus huesos. '),
(7, 'Bombay', 'https://gatocurioso.000webhostapp.com/img/breed/bombay.jpg', 'Al Bombay siempre se le compara con una pantera en miniatura. Este parecido no es gratuito, la “madre” de la raza, la criadora norteamericana Nikki Horner, se empeñó en crear un gato lo más parecido posible a su personaje preferido: Bagheera, la entrañable pantera negra de “el libro de la Selva” de R. Kipling. '),
(8, 'Bosque de Noruega', 'https://gatocurioso.000webhostapp.com/img/breed/bosque_de_noruega.jpg', 'El Bosque de noruega es un magnifico gato doméstico. Le debe su aspecto “abrigado”, desde las orejas hasta la punta de las patas, a la perfecta adaptación a su antiguo entorno natural, los fríos bosques nórdicos. Descendiente de ancestrales especies salvajes, el Bosque de Noruega ha protagonizado numerosas fabulas de la mitología noruega. '),
(9, 'Británico de pelo corto azul', 'https://gatocurioso.000webhostapp.com/img/breed/britanico_de_pelo_corto_azul.jpg', 'El Británico de pelo corto azul es la variante en azul del Británico de pelo corto. A pesar de su popularidad, la FIFE no lo reconoce como raza propia como ocurre con otra raza muy parecida que es el Chartreux, de origen francés. Luego de diez años decidió volver a separarlas amparada en las alegaciones genealógicas que presentaban criadores profesionales de las dos razas. '),
(10, 'Burmilla', 'https://gatocurioso.000webhostapp.com/img/breed/burmilla.jpg', 'El termino Burmilla, como se puede deducir, proviene de la combinación lingüística de Burmés y de Persa Chinchilla, las razas de las que procede. El gato plateado, como se le suele denominar, goza de gran popularidad, aunque la raza, en sus inicios, conto con serios obstáculos por motivos genéticos. \r\n\r\nEl termino Burmilla, como se puede deducir, proviene de la combinación lingüística de Burmés y de Persa Chinchilla, las razas de las que procede. El gato plateado, como se le suele denominar, goza de gran popularidad, aunque la raza, en sus inicios, conto con serios obstáculos por motivos genéticos. \r\n\r\nEl termino Burmilla, como se puede deducir, proviene de la combinación lingüística de Burm'),
(11, 'Cartujo', 'https://gatocurioso.000webhostapp.com/img/breed/cartujo.jpg', 'El Cartujo o conocido como Chartreux, es un gato corpulento y tranquilo con un inconfundible manto azul. Esta raza, aunque posee unos rasgos concretos y diferenciadores, suele confundirse a menudo con el Británico de pelo corto azul. La principal diferencia entre ellos se encuentra en la forma de la cabeza, la nariz y los ojos. El Cartujo presenta una forma más angulosa, como de trapecio invertido, su nariz es recta y un poco respingada y sus ojos ligeramente inclinados por el extremo. '),
(12, 'Cornish Rex', 'https://gatocurioso.000webhostapp.com/img/breed/cornish_rex.jpg', 'Se puede decir que el Cornish rex es un carpincho de la genética, una mutación espontanea origino su curioso pelaje ondulado. Desde este hecho, allá por los años 1950 en Inglaterra, el Cornish Rex no ha parado de ganar adeptos, su carácter cariñoso y su fácil cuidado lo convierten en un excelente y excéntrico animal doméstico. '),
(13, 'Devon Rex', 'https://gatocurioso.000webhostapp.com/img/breed/devon_rex.jpg', 'El Devon Rex pertenece a una de las razas felinas más singulares. A pesar de su parecido con el Cornish Rex, ambos poseen el peculiar pelaje Rex (pelo muy corto y ondulado), el Devon proviene de un gen distinto, descubierto diez años más tarde. Desde entonces, el Devon Rex no ha dejado de sumar simpatizantes gracias a su dócil carácter y su fácil mantenimiento. '),
(14, 'Europeo de pelo corto', 'https://gatocurioso.000webhostapp.com/img/breed/europeo_de_pelo_corto.jpg', 'Se podría decir que el Europeo de pelo corto es el gato doméstico por antonomasia. A pesar de sus extraordinarias dotes para la vida junto a los humanos, es muy capaz de desenvolverse sin l ayuda de este gracias a su gran fortaleza y notable inteligencia. Estos antiguos felinos de sencilla belleza, han sabido adaptarse perfectamente a su entorno y ganarse la estima del hombre sin necesidad de lucir un ostentoso aspecto. '),
(15, 'Exótico de pelo corto', 'https://gatocurioso.000webhostapp.com/img/breed/exotico_de_pelo_corto.jpg', 'El gato Exótico de pelo corto es sin duda el pariente más cercano del Persa, mantiene casi todas sus características a excepción de la fundamental, la largada de su pelo. A pesar de ser una raza creada artificialmente, se ha conseguido con gran éxito dotar a estos animales de un magnifico aspecto y de un excelente carácter, ideal para tener en casa. '),
(16, 'Highland Fold', 'https://gatocurioso.000webhostapp.com/img/breed/highland_fold.jpg', 'El Highland Fold es la versión Scottish Fold en pelo largo. Este magnífico gato de pequeñas y dobladas orejitas tiene un atractivo adicional, su espléndido manto. El desconocimiento de esta raza, que no está muy vista en este país, hace que no se aprecie en su verdadera medida, además debido a que es un cruce con British, cada camada crea la incógnita de saber cuántos Highland Fold nacerán, provocando que sea considerado un bien escaso y por lo tanto poco accesible al público general. '),
(17, 'Himalayo', 'https://gatocurioso.000webhostapp.com/img/breed/himalayo.jpg', 'El gato Himalayo es el resultado del cruce ideado por el hombre entre gatos Persas y Siameses. En la actualidad, con el modelo bien establecido, nos encontramos con bellos ejemplares cuya morfología es la del gato Persa y el color del Siamés. En Europa se le considera como una subraza del Persa mientras que en Estados Unidos lo tratan como raza propia. '),
(18, 'Korat', 'https://gatocurioso.000webhostapp.com/img/breed/korat.jpg', 'El Korat forma junto al Británico de pelo corto azul, al Chartreux, al Azul Ruso y al Nebelung, las razas de pelo azul más conocidas. Pese a su formidable apariencia y su carácter afectuoso, no goza de la popularidad de alguna de sus otros parientes azules. '),
(19, 'Maine Coon', 'https://gatocurioso.000webhostapp.com/img/breed/maine_coon.jpg', 'El Maine coon es popularmente conocido como el Goliat de los gatos, indudablemente por su gran tamaño, aunque también se le conoce como el gato mapache por el parecido de su cola con la del pequeño mamífero. Se trata de un gato muy sociable y fácil de cuidar, el gato perfecto para la convivencia familiar. '),
(20, 'Manx', 'https://gatocurioso.000webhostapp.com/img/breed/manx.jpg', 'El Manx es una de las siete razas, oficialmente reconocidas, de gatos que carecen total o parcialmente de cola. La raza contempla dos variedades, los “Stumply” cuya cola es muy pequeña, no debe superar los 3 cm y los “Rumpy”, carentes totalmente de cola y con un orificio al final de su columna vertebral. '),
(21, 'Mau Egipcio', 'https://gatocurioso.000webhostapp.com/img/breed/mau_egipcio.jpg', 'El Mau egipcio proviene del antiguo gato salvaje africano. Su protagonismo en el antiguo Egipto está más que constatado, eran gatos sagrados, representados en innumerables muestras del arte egipcio. En este sentido, Morrison Scott, egiptólogo y experto en gatos, realizo un interesante estudio sobre unos gatos momificados, confirmando que se trataban de Maus. '),
(22, 'Mestizo', 'https://gatocurioso.000webhostapp.com/img/breed/mestizo.jpg', 'El gato Mestizo, callejero o criollo, proviene de sus ancestros egipcios. Deriva directamente del gato montés africano, llamado Felis Libyca, y se supone que ha tenido también la inclusión de genes del gato de la jungla africana, el Feliz Chaus. '),
(23, 'Neva Masquerade', 'https://gatocurioso.000webhostapp.com/img/breed/neva_masquerade.jpg', 'El Neva Masquerade es la variante colorpoint del gato Siberiano. Posee el magnífico aspecto propio de la raza y su misma morfología. La única diferencia se encuentra en el color de su manto, a diferencia del Siberiano, el Neva Masquerade presenta un manto colorpoint, con los  extremos de su cuerpo (patas, cola, orejas y nariz) más oscuros que el resto. '),
(24, 'Occicat', 'https://gatocurioso.000webhostapp.com/img/breed/occicat.jpg', 'El Occicat o gato ocelote forma, junto al Mau Egipcio y al Bengalí, las tres razas felinas más “salvajes” por lo menos en cuanto a aspecto se refiere. A diferencia de estos, el Occicat procede del cruce entre razas ya establecidas en el intento de obtener una fiera salvaje en miniatura, el Ocelote concretamente, aunque con carácter dócil y sociable. '),
(25, 'Oriental de pelo corto', 'https://gatocurioso.000webhostapp.com/img/breed/oriental_de_pelo_corto.jpg', 'El Oriental de pelo corto es el representante tradicional de la familia oriental y el pariente unicolor del gato siamés. Junto con el Persa, son los artífices de muchas de las razas de hoy en día. A pesar de ser una raza viene establecida, el Oriental sigue viéndose como una rareza y cuenta con un reducido grupo de admiradores. '),
(26, 'Persa', 'https://gatocurioso.000webhostapp.com/img/breed/persa.jpg', 'El gato Persa es para muchos, sinónimo de gato de lujo, el máximo representante de las razas nobles. Su porte tranquilo, su pelaje majestuoso y su gracioso hocico plano, lo convierten en el rey de las exposiciones. El Persa será el gato ideal siempre que se asuma como rutina diaria la dedicación al cepillado de su melena. '),
(27, 'Peterbald', 'https://gatocurioso.000webhostapp.com/img/breed/peterbald.jpg', 'El Peterbald es un gato de apariencia “Oriental” pero con una peculiaridad, no tiene pelo. A pesar de su corta andadura, la raza tiene algo más de quince años, el Peterbald ya está reconocido por las principales asociaciones felinas y va poco a poco incrementando las simpatías del público que no deja de verlo como un gato diferente, estilizado y elegante y de porte inequívocamente “Oriental”. '),
(28, 'Ragdoll', 'https://gatocurioso.000webhostapp.com/img/breed/ragdoll.jpg', 'El Ragdoll fue durante muchos años una de las razas más cuestionadas en Norteamérica, donde se originó la cría. Algunos criadores Sagrados de Birmania veían en el un “Birmano de imitación”. Los rumores de que era un gato insensible al dolor, tampoco ayudaban a su consolidación. Afortunadamente, todas estas especulaciones forman parte del pasado, el Ragdoll, hoy en día es una de las razas más apreciadas. '),
(29, 'Sagrado de Birmania', 'https://gatocurioso.000webhostapp.com/img/breed/sagrado_de_birmania.jpg', 'Se dice del Sagrado de Birmania que crea adicción. Su dócil carácter y su fácil adaptabilidad serían las causas más justificadas, aunque también influye su buen temperamento. Nunca protestan, en vez de maullar, emiten un suave ronroneo. Se divierten con pequeñas acrobacias domésticas y sobre todo se relacionan perfectamente con los niños. '),
(30, 'Selkirk Rex', 'https://gatocurioso.000webhostapp.com/img/breed/serkirk_rex.jpg', 'El Selkirk Rex es una de las más recientes razas naturales cuya característica principal está en su pelo rizado. Decimos raza natural porque ha nacido de una mutación espontanea en la que no ha tenido nada que ver la manipulación humana. '),
(31, 'Siamés', 'https://gatocurioso.000webhostapp.com/img/breed/siames.jpeg', 'El Siamés, procedente del antiguo reino de Siam en Tailandia produce controversia desde su primera aparición en Europa hacia el 1870. Desde entonces y hasta nuestros días para unos es un simple gato con mascara de enormes orejas mientras que para otros, los más, se trata del gato más elegante del mundo, en cualquier caso, sus intensos ojos azules no dejan a nadie indiferente. '),
(32, 'Siberiano', 'https://gatocurioso.000webhostapp.com/img/breed/siberiano.jpg', 'El Siberiano, junto al Maine Coon y al Bosque de Noruega, es uno de los integrantes de los llamados “gatos de bosque”. Al igual que sus compañeros, este gato está provisto de una exuberante y gruesa cabellera, densa e impermeable, imprescindible para la supervivencia en los climas más gélidos. '),
(33, 'Snowshoe', 'https://gatocurioso.000webhostapp.com/img/breed/snowshoe.jpg', 'El Snowshoe o “gatos con zapatos de nieve”, como su nombre indica, es una raza muy joven obtenida del cruce entre Siamés y American Shorthair. Del primero ha heredado su cuerpo alargado, su cabeza triangular y el color azul luminoso de los ojos. La apariencia musculosa y los singulares pies blancos son herencia del segundo. '),
(34, 'Somalí', 'https://gatocurioso.000webhostapp.com/img/breed/somali.jpg', 'Se dice del Somalí que es el pariente del pelo largo de una de las razas más populares, el Abisinio. Estas dos razas están emparentadas desde sus inicios, en muchas camadas de Abisinios se daba, para malestar de los criadores, algún ejemplar de pelo semilargo al que se apartaba de la cría. Afortunadamente hoy en día, hay que considerar al Abisinio como raza independiente ya que posee un genotipo y un carácter propio y genuino. '),
(35, 'Sphynx', 'https://gatocurioso.000webhostapp.com/img/breed/sphynx.jpg', 'El Sphynx produce, desde sus orígenes, el mismo grado de afecto que de rechazo. Para sus detractores es un gato raro, con cabeza de serpiente y orejas de murciélago. Sus incondicionales, en cambio, lo valoran como una excentricidad de la naturaleza. Lo cierto es que su desnudez no deja a nadie indiferente. '),
(36, 'Toyger', 'https://gatocurioso.000webhostapp.com/img/breed/toyger.jpg', 'Los Toyger son una raza de diseño, amorosos y brillantes, de tamaño mediano, pelo corto y domésticos que nos recuerdan a los grandes felinos: Los tigres. Diseñados con la intención de tener un gato activo que se pudiera adaptar a la vida urbana actual y que además tuviera una apariencia única. Son gatos inteligentes, fáciles de entrenar, atléticos, poseedores de una excelente salud y longevidad. Los toyger poseen un temperamento amoroso, ya que antes que nada son mascotas y animales de compañía. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_colour_list`
--

CREATE TABLE `app_gato_curioso_colour_list` (
  `id` tinyint(11) UNSIGNED NOT NULL,
  `colour` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_colour_list`
--

INSERT INTO `app_gato_curioso_colour_list` (`id`, `colour`) VALUES
(1, 'Negro'),
(2, 'Azul'),
(3, 'Rojo'),
(4, 'Crema'),
(5, 'Chocolate'),
(6, 'Blanco'),
(7, 'Canela'),
(8, 'Atigrado dos colores'),
(9, 'Atigrado 3 colores'),
(10, 'Machas 2 colores'),
(11, 'Manchas 3 colores'),
(12, 'Bicolor'),
(13, 'Tricolor'),
(14, 'Rayas 2 colores'),
(15, 'Rayas 3 colores'),
(16, 'Sin pelaje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_curiosities`
--

CREATE TABLE `app_gato_curioso_curiosities` (
  `id` int(10) UNSIGNED NOT NULL,
  `random_data` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_curiosities`
--

INSERT INTO `app_gato_curioso_curiosities` (`id`, `random_data`) VALUES
(1, 'Se comunican mediante vocalizaciones como maullidos, aullidos y ronroneos, además de ciertas poses y movimientos.'),
(2, 'Su esperanza de vida va de entre 12 y 14 años.'),
(3, 'Además de saltar hasta 3.5 metros, utilizan sus uñas para escalar muros, árboles o superficies blandas.'),
(4, 'Si su pelaje es de tres o hasta cuatro colores, se trata de una hembra o de un macho estéril.'),
(5, 'Cada una de sus orejas tiene 32 músculos y movimientos independientes.'),
(6, 'Duermen entre 13 y 14 horas al día.'),
(7, 'Su temperatura corporal va de los 38 a los 39 ºC.'),
(8, 'Estos sigilosos depredadores son capaces de pisar con sus patas traseras casi en el mismo sitio que las delanteras.'),
(9, 'El cáncer es una causa de muerte frecuente en gatos adultos.'),
(10, 'Sus bigotes, llamados vibrisas, son amplificadores de sus sentidos, ya que les permiten detectar vibraciones, corrientes de aire y movimientos a distancia.'),
(11, 'Demuestran su afecto con trofeos de caza como ratones, aves y lagartos pequeños.'),
(12, 'No existen dos gatos con la misma nariz. La nariz de cada gato es única.'),
(13, 'Acicalarse les ayuda a mantener su piel y pelo sanos, regular su temperatura, aumentar la circulación sanguínea, eliminar el cabello suelto y la suciedad.'),
(14, 'Los gatos expresan su amor con los cuándo te miran y parpadean lentamente.'),
(15, 'Tienen la capacidad de oler con la boca, cuando quieren oler con gran detalle, abren mucho la boca.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_food_list`
--

CREATE TABLE `app_gato_curioso_food_list` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_food_list`
--

INSERT INTO `app_gato_curioso_food_list` (`id`, `name`, `picture`) VALUES
(1, 'Whiskas Carne', 'https://gatocurioso.000webhostapp.com/img/food/whiskas1.png'),
(2, 'Whiskas Pescado', 'https://gatocurioso.000webhostapp.com/img/food/whiskas2.png'),
(3, 'Whiskas Pollo y Leche', 'https://gatocurioso.000webhostapp.com/img/food/whiskas3.png'),
(4, 'Whiskas Salmon', 'https://gatocurioso.000webhostapp.com/img/food/whiskas4.png'),
(5, 'Whiskas Carne y Leche', 'https://gatocurioso.000webhostapp.com/img/food/whiskas5.png'),
(6, 'Felix Atún', 'https://gatocurioso.000webhostapp.com/img/food/felix1.png'),
(7, 'Felix Pavo', 'https://gatocurioso.000webhostapp.com/img/food/felix2.png'),
(8, 'Felix Pescado blanco', 'https://gatocurioso.000webhostapp.com/img/food/felix3.png'),
(9, 'Felix Pollo e Hígado', 'https://gatocurioso.000webhostapp.com/img/food/felix4.png'),
(10, 'Felix Pescado', 'https://gatocurioso.000webhostapp.com/img/food/felix5.png'),
(11, 'Felix Pollo', 'https://gatocurioso.000webhostapp.com/img/food/felix6.png'),
(12, 'Gati Carne, Arroz y Maíz', 'https://gatocurioso.000webhostapp.com/img/food/gati1.jpg'),
(13, 'Gati Pescado, Arroz y Espinaca', 'https://gatocurioso.000webhostapp.com/img/food/gati2.jpg'),
(14, 'Gati Pollo, Zanahoria y Espinaca', 'https://gatocurioso.000webhostapp.com/img/food/gati3.jpg'),
(15, 'MV Obesidad', 'https://gatocurioso.000webhostapp.com/img/food/mv1.png'),
(16, 'MV Gastrointestinal', 'https://gatocurioso.000webhostapp.com/img/food/mv2.png'),
(17, 'MV Urinario', 'https://gatocurioso.000webhostapp.com/img/food/mv3.png'),
(18, 'MV Renal', 'https://gatocurioso.000webhostapp.com/img/food/mv4.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_genre_list`
--

CREATE TABLE `app_gato_curioso_genre_list` (
  `id` tinyint(11) UNSIGNED NOT NULL,
  `genre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_genre_list`
--

INSERT INTO `app_gato_curioso_genre_list` (`id`, `genre`) VALUES
(1, 'Hembra'),
(2, 'Macho');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_users`
--

CREATE TABLE `app_gato_curioso_users` (
  `user_email` varchar(60) NOT NULL,
  `user_password` varchar(60) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `user_birthdate` date DEFAULT NULL,
  `user_sex` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_user_sex_list`
--

CREATE TABLE `app_gato_curioso_user_sex_list` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `sex` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `app_gato_curioso_user_sex_list`
--

INSERT INTO `app_gato_curioso_user_sex_list` (`id`, `sex`) VALUES
(1, 'Hombre'),
(2, 'Mujer'),
(3, 'Sin especificar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_gato_curioso_vaccine_types`
--

CREATE TABLE `app_gato_curioso_vaccine_types` (
  `id` int(11) UNSIGNED NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `app_gato_curioso_vaccine_types`
--

INSERT INTO `app_gato_curioso_vaccine_types` (`id`, `type`) VALUES
(1, 'Trivalente'),
(2, 'Leucemia'),
(3, 'Peritonitos infecciosa felina (PIF)'),
(4, 'Rabia'),
(5, 'Parvovirus');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `app_gato_curioso_breed_list`
--
ALTER TABLE `app_gato_curioso_breed_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `breed_id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_colour_list`
--
ALTER TABLE `app_gato_curioso_colour_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `colour_id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_curiosities`
--
ALTER TABLE `app_gato_curioso_curiosities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `r_id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_food_list`
--
ALTER TABLE `app_gato_curioso_food_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `food_id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_genre_list`
--
ALTER TABLE `app_gato_curioso_genre_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `genre_id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_users`
--
ALTER TABLE `app_gato_curioso_users`
  ADD PRIMARY KEY (`user_email`),
  ADD UNIQUE KEY `email` (`user_email`) USING BTREE,
  ADD KEY `u_Sex` (`user_sex`);

--
-- Indices de la tabla `app_gato_curioso_user_sex_list`
--
ALTER TABLE `app_gato_curioso_user_sex_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`) USING BTREE;

--
-- Indices de la tabla `app_gato_curioso_vaccine_types`
--
ALTER TABLE `app_gato_curioso_vaccine_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vaccine_id` (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_breed_list`
--
ALTER TABLE `app_gato_curioso_breed_list`
  MODIFY `id` tinyint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_colour_list`
--
ALTER TABLE `app_gato_curioso_colour_list`
  MODIFY `id` tinyint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_curiosities`
--
ALTER TABLE `app_gato_curioso_curiosities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_food_list`
--
ALTER TABLE `app_gato_curioso_food_list`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_genre_list`
--
ALTER TABLE `app_gato_curioso_genre_list`
  MODIFY `id` tinyint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_user_sex_list`
--
ALTER TABLE `app_gato_curioso_user_sex_list`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `app_gato_curioso_vaccine_types`
--
ALTER TABLE `app_gato_curioso_vaccine_types`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `app_gato_curioso_users`
--
ALTER TABLE `app_gato_curioso_users`
  ADD CONSTRAINT `u_Sex` FOREIGN KEY (`user_sex`) REFERENCES `app_gato_curioso_user_sex_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
