const mdcombo = [
   '1, 나는 믿나이다, Albert G Stein, 나는 굳게 믿나이다, 연중',
   '2, 주 하느님 크시도다, Stuart K Hine, 주 하느님 지으신 모든 세계, 연중',
   '3, 빛의 하느님, 수도자의 기도 최병철, 고맙기 그지없다 빛의 하느님, 연중',
   '4, 찬양하라, Peter Sohren 새가톨릭성가편찬위원회, 찬양하라 전능하신 창조주, 연중',
   '5, 찬미의 기도, 서행자, 저동편 하늘 환히 밝아오고, 연중',
   '6, 찬미 노래 부르며, 손복희 Lowell Mason, 찬미 노래 부르며 주대전 떠납니다, 연중',
   '7, 주님께 새로운 노래를, 최병철, 새로운 노래 주님께 부르세, 연중',
   '8, 이른 아침, 손복희 최병철, 이른 아침 마음 모아 주님 찾을때, 연중',
   '9, 우리 모두 함께 모여, 고도임 최병철, 우리 모두 함께 모여 하느님께 경배해, 연중',
   '10, 주를 찬미해, 프랑스 성가 새가톨릭성가편찬위원회, 내 주를 찬미해 시온에서, 연중',
   '11, 주 하느님, 최창무 김영자, 주 하느님 야곱의 천주여, 연중',
   '12, 주님을 기리나이다, 샬트르 성 바오로 수녀회 새가톨릭성가편찬위원회, 주님을 기리나이다 찬미하나이다, 연중',
   '13, 주님을 그리나이다, 박정미 최병철, 내 영혼이 생명의 주 하느님을, 연중',
   '14, 주께 찬양드리세, 강청란 William H Monk, 아침 해 떠오를때, 연중',
   '15, 주님을 찬미하라, 김광남 John R Sweney 새가톨릭성가편찬위원회, 저 파아란 하늘을 너 바라보아라, 연중',
   '16, 온 세상아 주님을, Lucien Deiss, 온 세상아 주님을 찬미하여라, 연중',
   '17, 정의의 하느님, John W Hatton, 주 하느님 정의로써 당신백성, 연중',
   '18, 주님을 부르던 날, 이종철, 주님을 부르던 날 당신은 내게 응답하셨나이다, 연중',
   '19, 주를 따르리, 한국 순교 복자 성직 수도회 새가톨릭성가편찬위원회, 주 예수 우리의 희망 우리의 행복, 연중',
   '20, 어두움을 밝히소서, 서행자, 정의의 태양이신 예수 그리스도여, 연중',
   '21, 지극히 전능하신 주여, Georg Joseph, 지극히 전능하신 주여 주만을 사랑하리다, 연중',
   '22, 천지 생기기 전, 이종철, 천지 생기기 전 하느님의 말씀이, 연중',
   '23, 온 세상 다스리심, William J Kirkpatrick, 온 세상 모든 만물 주 다스리신다, 연중',
   '24, 내 맘의 천주여, 이탈리아 성가 Nicola A Montani, 내 맘의 천주여 만물이 모두, 연중',
   '25, 사랑의 하느님, Trad Melody 새가톨릭성가편찬위원회, 사랑의 하느님 자비의 하느님, 연중',
   '26, 이끌어 주소서, Charles H Purday, 광명으로 이끌어 주소서 주 예수여, 연중',
   '27, 이 세상 덧없이, Johann M Haydn, 풀잎끝에 맺혀진 이슬방울같이, 연중',
   '28, 불의가 세상을 덮쳐도, , 불의가 세상을 덮쳐도 불신이 만연해도, 연중',
   '29, 주 예수 따르기로, Arthur H Mann 새가톨릭성가편찬위원회, 주 예수 따르기로 나 약속 했으니, 연중',
   '30, 승리의 십자가, 이탈리아 성가 새가톨릭성가편찬위원회, 십자가 승리하네 우리구원하리라, 연중',
   '31, 이 크신 모든 은혜, Trad Melody 통일성가집편찬위원회, 이 크신 모든 은혜 베풀어 주시니, 연중',
   '32, 언제나 주님과 함께, Johann M Haydn, 언제나 주님과 함께 산다면 우리는 얼마나, 연중',
   '33, 우리 주 예수 그리스도, William C Burns 새가톨릭성가편찬위원회, 우리 주 예수 그리스도 내영의 위로여, 연중',
   '34, 길이요 진리요 생명이신 주, James Mountain, 내가 사랑받았고 은총속에 산것은, 연중',
   '35, 나는 포도나무요, 김경옥 원선오 새가톨릭성가편찬위원회, 나는 포도나무요 너희는 가지로다, 연중',
   '36, 거룩한 예수 마음, , 거룩한 예수 마음이여, 연중',
   '37, 행복한 사람들, 이연국, 가난한 사람들아 너희는 행복하다, 연중',
   '38, 행복하여라, 김대붕, 행복하여라 행복하여라, 연중',
   '39, 하나 되게 하소서, 정인상, 성부여 이사람들이 아버지의 뜻을 따라, 연중',
   '40, 구하시오 받으리라, 이종철, 구하시오 받으리라 찾으시오 얻으리라, 연중',
   '41, 형제에게 베푼 것, 주재효 김대붕, 우리가 어느때 주님께 음식을 드렸고, 연중',
   '42, 가장 미소한 자를 대접하라, 최병철, 네가 가장 미소한 모든이를 대접함이, 연중',
   '43, 영원한 생명, 박정미 최병철, 주께서 간절히 이르신 말씀 당신을 따르라, 연중',
   '44, 평화를 주옵소서, 김광남 Peter P Bilhorn, 날 어여삐 여기소서 참 생명을 주시는 주, 연중',
   '45, 참사랑, 최병철, 참사랑은 모든 것을 덮어 주고 믿으며, 연중',
   '46, 사랑의 송가, Tina Benitez, 천사의 말을 하는 사람도 사랑없으면, 연중',
   '47, 형제여 손을 들어, , 형제여 손을 들어 맹세하세 주님께, 연중',
   '48, 주 우리에게 사랑과 자유를, 김금자, 주 우리에게 사랑과 자유를 주시오며, 연중',
   '49, 옹기장이, 김부자 김영자, 옹기장이 손에는 진흙과 같이, 연중',
   '50, 주님은 나의 목자, Joseph Gelineau, 주님 나의 목자 아쉬울 것 없노라, 연중',
   '51, 주 나의 목자 되시니, Jessie S Irvine, 주 나의 목자 되시니, 연중',
   '52, 하느님 나의 주님, 박창득 이태성, 하느님 내 사랑 나의 주님, 연중',
   '53, 주님은 나의 목자, Paul Quinlan 새가톨릭성가편찬위원회, 주님은 나의 목자 아쉬울것 없노라, 연중',
   '54, 주님은 나의 목자, 구명림, 주님은 나의 목자시니, 연중',
   '55, 착하신 목자, Phoebe P Knapp, 착하신 목자 우리주님 양들을 위해 목숨 바치니, 연중',
   '56, 목자를 따라서, John Zundel 새가톨릭성가편찬위원회, 양떼를 떠나서 나 길을 잃었네, 연중',
   '57, 우리는 목장의 백성이로세, 구명림, 우리를 내신 하느님께 조배드리세, 연중',
   '58, 이 몸은 애타게 당신을 찾습니다, 이연국, 암사슴이 시냇물을 찾듯이, 연중',
   '59, 주께선 나의 피난처, 강청란 James McGranahan 새가톨릭성가편찬위원회, 주께서 나의 피난처 의지할 곳 주님뿐, 연중',
   '60, 주의 이름 찬양하라, 김부자 최병철 작곡, 알렐루야 알렐루야 장엄하고 거룩하게, 연중',
   '61, 주 예수와 바꿀 수는 없네, Rhea F Miller George B Shea, 주 예수 그리스도와 바꿀 수는 없네, 연중',
   '62, 주님의 뜻을 이루소서, George C Stebbins, 주님의 뜻을 이루소서, 연중',
   '63, 온 세상에 전파하리, 김금자, 온 세상에 전파하리 복음말씀을, 연중',
   '64, 이스라엘 들으라, 윤승자 김영자 작곡, 이스라엘 들으라 생명의 말씀, 연중',
   '65, 예루살렘 복되고, J Grabowski, 예루살렘 복되고 즐거운 낙원이여, 연중',
   '66, 주의 백성 모여 오라, 김진균, 주의 백성 모여 오라 구원의 제단에, 연중',
   '67, 성전 오른편에서, 김대붕, 성전 오른편에서 흘러 내리는, 연중',
   '68, 기쁨과 평화 넘치는 곳, Trad Melody, 기쁨과 평화 넘치는 하느님 계신곳, 연중',
   '69, 지극히 거룩한 성전, Jos Mohr, 지극히 화려하고 영화로운 성전, 연중',
   '70, 평화를 구하는 기도, 김대붕, 평화의 주여 하찮은 나지만, 연중',
   '71, 평화의 기도, 장정온 김영자, 오주여 나를 평화의 도구로 써주소서, 연중',
   '72, 타보르산의 예수, 박계순, 주 예수 찬란하게 광채에 싸이어, 연중',
   '73, 만민의 왕 그리스도, , 엄위하신 주 예수 그리스도 온세상 기뻐맞이하오며, 연중',
   '74, 참왕이신 그리스도, 김금자, 주 예수는 세상의 왕 큰 권능의 왕이시네, 연중',
   '75, 주 그리스도 우리 왕, Melchior Teschner 새가톨릭성가편찬위원회, 주 그리스도 우리 왕께 큰 영광 드리세, 연중',
   '76, 그리스도 왕국, 김부자 최병철, 겨자씨 자라나서 큰 나무 되듯이, 연중',
   '77, 주 천주의 권능과, Peter Ritter, 주 천주의 권능과 위엄이, 연중',
   '78, 영광의 왕께 찬미를, Johann M Haydn 새가톨릭성가편찬위원회, 영광의 왕께 다 경배하며, 연중',
   '79, 그리스도 승리, 새가톨릭성가편찬위원회, 그리스도 승리 그리스도 왕국 그리스도 다스리신다, 연중',
   '80, 거룩하신 성삼이여, 조정옥 새가톨릭성가편찬위원회, 거룩하신 성삼이여 하나이신 삼위 일체, 연중',
   '81, 영광의 주 성삼위, Felice de Giardini 새가톨릭성가편찬위원회, 성부 성자 성령 거룩한 삼위 일체, 연중',
   '82, 주 찬미, William H Doane, 크신 일을 이루신 하느님께, 연중',
   '83, 주 찬미하라 (Laudate Dominum), Georg F Händel, 주 찬미하라 모든 민족들아, 연중',
   '84, 얼마나 좋은고 (Ecce Quam Bonum), 라틴어 성가 통일성가집편찬위원회, 얼마나 좋고도 즐거운고, 연중',
   '85, 즈가리야의 노래, 그레고리오 성가 새가톨릭성가편찬위원회, 주여 이스라엘의 하느님 찬미받으소서, 연중',
   '86, 오늘 밤에, Trad Melody, 오늘 밤에 주사랑 그안에, 연중',
   '87, 이 밤을 축복하옵소서, , 이 하루 주님의 은혜로 모두 바쳤으니, 연중',
   '88, 임하소서 구세주여, Choral, 임하소서 구세주여 기다린지 오랬도다, 대림',
   '89, 주 하느님 자비로이, , 주 하느님 자비로이 천국문을 여시고, 대림',
   '90, 구세주 보내 주소서, Choral, 천주여 모든 괴롬에 구할 자 보내주소서, 대림',
   '91, 구세주 빨리 오사, 프랑스 Carol Cabrisseau, 구세주 빨리 오사 어두움을 없이 하며, 대림',
   '92, 구세주 내 주 천주여, 독일 성가, 구세주 내 주 천주여 당신의 십자 열쇠로, 대림',
   '93, 임하소서 임마누엘, Thomas Helmore, 임하소서 임마누엘이여 천하만민을, 대림',
   '94, 하늘은 이슬비처럼, 그레고리오 성가 김광남 새가톨릭성가편찬위원회, 하늘은 이슬비처럼 의인을 내려다오, 대림',
   '95, 별들을 지어 내신 주, 수도자의 기도 Breton Air 새가톨릭성가편찬위원회, 별들을 지어 내신 창조주시여, 대림',
   '96, 하느님 약속하신 분, 이순금 John B Dykes 새가톨릭성가편찬위원회, 하느님 약속하신 분 구세주 메시아, 대림',
   '97, 구원의 메시아, G Darcy, 이 세상 만민들이 구원을 바라며, 대림',
   '98, 이사야 말씀하신, 독일 Carol 이문근, 이사야 말씀하신 그 나무등걸에, 성탄',
   '99, 고요한 밤 거룩한 밤, Franz X Gruber, 고요한 밤 거룩한 밤 만상이 잠든때, 성탄',
   '100, 동방의 별, James P Harding, 하늘에 빛나는 찬란한 별빛, 성탄',
   '101, 글로리아 높으신 이의 탄생, Ancien Noël, 지극히 높으신 이의 탄생하심을 알리는, 성탄',
   '102, 어서 가 경배하세, John F Wade, 모든 형제들아 즐겨 노래하며, 성탄',
   '103, 오늘 아기 예수, , 오늘 아기 예수 탄생하셨으니, 성탄',
   '104, 사랑하올 아기 예수, Choral 이문근, 비옵느니 사랑하올 아기 예수, 성탄',
   '105, 사랑의 아기 예수, 이탈리아 성가, 하늘의 아기여 참 귀한 아기, 성탄',
   '106, 찬바람 스치는 마구간, William J Kirkpatrick, 찬바람 스치는 마구간에서, 성탄',
   '107, 천사의 찬송, Felix Mendelssohn, 천사 찬송 하기를 새로나신 주님께, 성탄',
   '108, 오 작은 고을 베들레헴, Lewis H Redner, 오 작은 고을 베들레헴 잠들었느냐, 성탄',
   '109, 귀여운 아기들, Johann P Schulz Nicola A Montani, 귀여운 아기들 모두 모여라, 성탄',
   '110, 경사롭다, Adolphe Adam 전례위원회 성음악분과, 경사롭다 고요한 오늘 밤에, 성탄',
   '111, 하늘 높은 곳에 영광, 새가톨릭성가편찬위원회, 귀여운 아기 구세주여 우리구원 예수여, 성탄',
   '112, 구유에 누워 계시니, 프랑스 Carol, 구세주 오늘 나셨네 구유에 누우신 주 예수, 성탄',
   '113, 성 요셉과 성 마리아, 새가톨릭성가편찬위원회, 성 요셉과 성 마리아 예수님을 모시고, 성탄',
   '114, 나자렛 성가정, 서행자, 복되다 주의 성가정 나자렛의 보금자리, 성탄',
   '115, 수난 기약 다다르니, André Campra 이문근, 수난 기약 다다르니 주 예수 산에 가시어, 사순',
   '116, 주 예수 바라보라, Hans L Haßler Johann S Bach, 주 예수 바라보라 정성된 맘으로, 사순',
   '117, 지극한 근심에, P Brydaine, 지극한 근심에 짓눌리는 예수, 사순',
   '118, 골고타 언덕, 그레고리오 성가 Lowell Mason, 무거운 십자가 지고가신, 사순',
   '119, 주님은 우리 위해, 웨일스 성가, 우리주 예수 그리스도 앞장서 가시니, 사순',
   '120, 수난의 예수, 조화선 최병철, 성부여 내 성부여 이잔 거두소서, 사순',
   '121, 한 많은 슬픔에, Trad Melody 이문근, 한 많은 슬픔에 탄식만 하오며, 사순',
   '122, 구원의 십자가, Choral, 구원의 십자가 앞에 그 신비 흠숭하여라, 사순',
   '123, 십자가 지고 가시는, 미국 성가, 십자가 지고 가시는 내주의 크신 고통을, 사순',
   '124, 은혜로운 회개의 때, 이순금 서병수, 은혜로운 회개의 때 우리에게 주시어, 사순',
   '125, 거룩한 주의 십자가, 서행자, 쓸개 받아 목축이고 가시못과 창에 찔려, 사순',
   '126, 메시아의 수난, 최병철, 하느님 내 하느님 어찌 버리십니까, 사순',
   '127, 십자가 바라보며 (Tantum Ergo), Johann S Bach, 자비하신 우리 주여 간절한 마음으로, 사순',
   '128, 형제여 기뻐하라 알렐루야, Georg F Händel, 부활하신 예수여 알렐루야, 부활',
   '129, 알렐루야 노래하자, Trad Melody 이문근, 알렐루야 노래하자 기쁜 때가 왔도다, 부활',
   '130, 예수 부활하셨네, Pierre-Alexandre Monsigny, 예수 부활하셨네 그전에 사도께 말씀하심과 같이, 부활',
   '131, 찬미 노래 드리자, 김대붕, 알렐루야 알렐루야 부활하신 주 예수, 부활',
   '132, 감사의 송가를, Don Fishel, 알렐루야 알렐루야 부활하신 우리주님, 부활',
   '133, 부활 송가, 김대붕, 안식일 다음날 아침 알렐루야, 부활',
   '134, 거룩하다 부활이여, , 거룩하다 부활이여 기쁘도다 알렐루야, 부활',
   '135, 알렐루야 알렐루야 주 예수, St Basils Hymnal, 알렐루야 알렐루야 부활하신 주 예수, 부활',
   '136, 예수 부활하셨도다, , 예수 부활하셨도다 알렐루야, 부활',
   '137, 부활하신 주 예수, 손복희 Robert Williams, 부활하신 주 예수 알렐루야, 부활',
   '138, 만왕의 왕, Claudio Goudimel, 만왕의 왕 주 예수여 우리들이 기뻐하며, 부활',
   '139, 알렐루야, Trad Melody 이문근, 알렐루야 알렐루야 알렐루야, 부활',
   '140, 주의 승천 찬미하네, 손복희 최병철 작곡, 알렐루야 알렐루야 우리주님 승천하네, 부활',
   '141, 죽음을 이긴, 슬로바키아 성가 Nicola A Montani, 죽음을 이긴 우리주님, 부활',
   '142, 오소서 성령이여, Choral, 오소서 성령이여 우리맘에 오소서, 성령',
   '143, 진리의 성령, 이순금 George Hews, 진리의 성령 오시어 당신의 교회 돌보시며, 성령',
   '144, 주의 얼이, 김대붕, 주의 얼이 온 누리에 충만하시며, 성령',
   '145, 임하소서 성령이여 (Veni Creator), Jean L Durand, 임하소서 성령이여 창조주여 임하소서, 성령',
   '146, 임하소서 성령이여, 그레고리오 성가 새가톨릭성가편찬위원회, 임하소서 성령이여 창조주여 임하소서, 성령',
   '147, 임하소서 성령이여, 독일 성가 Heinrich Bone, 임하소서 성령이여 우리의 맘 비추소서, 성령',
   '148, 위로자 성령, 미국 성가 새가톨릭성가편찬위원회, 임하소서 성령이여 창조주여 임하소서, 성령',
   '149, 어두움의 빛이신 성령, 김광남 Friedrich Fility, 이세상의 빛으로 우리에게 오시어, 성령',
   '150, 모든 은혜 근원이신 성령, 손복희 Louis M Gottschalk, 모든 은혜 근원인 성령이여 오시어, 성령',
   '151, 주여 임하소서, Lowell Mason, 주여 임하소서 내 마음에, 성체',
   '152, 오 지극한 신비여, Melchior Vulpius 이문근, 오 지극한 신비여 천주의 성자가, 성체',
   '153, 오소서 주 예수여, 최민순 이문근, 오소서 주 예수여 이마음에 오소서, 성체',
   '154, 주여 어서 오소서, Phil F Buchner 이문근, 주여 어서 오소서 내마음에 오소서, 성체',
   '155, 우리 주 예수, Franz B Bihlers 이문근, 우리 주 예수 영원한 생명, 성체',
   '156, 한 말씀만 하소서, Labat, 사랑의 주여 주님을 모시기에, 성체',
   '157, 예수 우리 맘에 오소서, Choral 이문근, 예수 우리 맘에 오사 태양같이 빛나시니, 성체',
   '158, 구세주 예수 그리스도, Felix Mendelssohn 이문근, 구세주 예수 그리스도 내 삶의 모두여, 성체',
   '159, 세상의 참된 행복, 이문근, 세상의 참된 행복 주 예수 여기 계시네, 성체',
   '160, 하느님의 어린양, Demore 이문근, 하느님의 어린양 인자하신 예수, 성체',
   '161, 성체를 찬송하세, Choral, 하늘에 별들을 누가 셀수 있는가, 성체',
   '162, 성체 성혈 그 신비, 최병철, 노래하자 성체 성혈 그 크신 신비, 성체',
   '163, 생명의 성체여, John D Edwards, 거룩한 성체여 주님의 몸과 피, 성체',
   '164, 떡과 술의 형상에, Johann S Bach, 떡과 술의 형상에 예수 임하시며, 성체',
   '165, 주의 잔치, , 축복받은 오늘이여 부당하온 이 죄인이, 성체',
   '166, 생명의 양식, Suzanne Toolan, 생명의 양식인 나에게로 오너라, 성체',
   '167, 생명이신 천상 양식, Johann M Haydn, 생명이신 천상 양식이여 우리영혼 양육하옵소서, 성체',
   '168, 오묘하온 성체, 슬로바키아 성가, 오묘하온 성체 앞에 찬미 흠숭드리세, 성체',
   '169, 사랑의 성사, Heinrich Isaac, 주 예수 수난 전날 마지막 만찬상에, 성체',
   '170, 자애로운 예수, 김영선, 주 예수의 희생 되새기옵는, 성체',
   '171, 오 거룩한 생명의 샘, 정인상, 오 거룩하신 성체 생명의 샘, 성체',
   '172, 그리스도의 영혼, , 주 예수 그리스도 나의 방패시니, 성체',
   '173, 사랑의 주여 오소서 (Veni Jesu Amor Mi), 김광남 Luigi Cherubini 새가톨릭성가편찬위원회, 사랑이신 예수여, 성체',
   '174, 사랑의 신비, , 사랑의 신비여 천사가 찬미하며, 성체',
   '175, 이보다 더 큰 은혜와, , 이보다 더 큰 은혜와 보다 큰 사랑이 있으랴, 성체',
   '176, 믿음 소망 사랑, 프랑스 성가 새가톨릭성가편찬위원회, 주여 오소서 우리에게 오소서, 성체',
   '177, 만나를 먹은 이스라엘 백성, 김광남 Dea Ton, 이스라엘 모든 백성들은 만나를 먹으며, 성체',
   '178, 성체 앞에, Choral 이문근, 형제들아 성체 앞에 모여 와서, 성체',
   '179, 주의 사랑 전하리, 이문근, 오 내 평화의 주 영혼의 위로자여, 성체',
   '180, 주님의 작은 그릇, 이순금 Johann S Bach, 내 마음은 주님이 지어내신 작은 그릇, 성체',
   '181, 신비로운 몸과 피, 최병철, 우리를 위하여 제헌하신 예수의 거룩한 희생이여, 성체',
   '182, 신묘하온 이 영적, Trad Melody, 오 거룩하신 성체 다 찬미하리다, 성체',
   '183, 구원을 위한 희생 (O Salutaris Hostia), 라틴어 성가, 구원의 희생되시어 천국의 문을 여시는 주, 성체',
   '184, 구원을 위한 희생 (O Salutaris Hostia), 그레고리오 성가 새가톨릭성가편찬위원회, 구원의 희생되시어 천국의 문 여시는 주, 성체',
   '185, 구원의 희생자 (O Salutaris Hostia), Lorenzo Perosi, 구원의 희생되시며 천국의 문을 여신 주, 성체',
   '186, 구원을 위한 희생 (O Salutaris Hostia), Alajos Werner, 구원의 희생되시어 천국의 문을 여시는 주, 성체',
   '187, 천사의 양식 (Panis Angelicus), J Mohr, 천사의 양식은 우리 양식되고, 성체',
   '188, 천사의 양식 (Panis Angelicus), RPL Lambillotte, 천사의 양식은 우리 양식되고, 성체',
   '189, 지존하신 성체 (Tantum Ergo), WA Smit, 지존하신 성체 앞에 꿇어 경배드리세, 성체',
   '190, 지존하신 성체 (Tantum Ergo), Minard, 지존하신 성체 앞에 꿇어 경배드리세, 성체',
   '191, 지존하신 성체 (Tantum Ergo), Louis de Monfort, 지존하신 성체 앞에 꿇어 경배드리세, 성체',
   '192, 지존하신 성체 (Tantum Ergo), 그레고리오 성가 새가톨릭성가편찬위원회, 지존하신 성체 앞에 꿇어 경배드리세, 성체',
   '193, 지존하신 성체 (Tantum Ergo), Choral, 지존하신 성체 앞에 꿇어 경배드리세, 성체',
   '194, 성체 안에 계신 예수 (Ave Verum), Wolfgang A Mozart, 성체 안에 계신 예수 동정성모께서 나신 주, 성체',
   '195, 천주 성자 예수 흠숭합니다 (Adoro Te Devote), 그레고리오 성가 새가톨릭성가편찬위원회, 밀떡 형상 그안에 감추어 계신 천주 성자 예수, 성체',
   '196, 오 착한 예수 (O Bone Jesu), Giovanni P da Palestrina, 오 착한 예수 자비 베푸소서, 성체',
   '197, 나그네 양식이요 (O Esca Viatorum), Trad Melody, 나그네 양식이요 천사들의 빵이며, 성체',
   '198, 성체 안에 계신 주님 (Pie Pellicane), 라틴어 성가, 자비하신 주여 선하신 주여, 성체',
   '199, 예수 마음, Trad Melody, 예수 마음 겸손하신 자여, 성심',
   '200, 열절하신 주의 사랑, Trad Melody 이문근, 열절하신 주의 사랑 내 맘을 사르네, 성심',
   '201, 은총의 샘, Choral, 은총의 샘인 성심 사랑의 바다여, 성심',
   '202, 구세주의 성심이여, , 구세주의 성심이여 오 오 거룩해, 성심',
   '203, 오 거룩한 마음, Choral 이문근, 오 거룩한 마음 예수의 성심, 성심',
   '204, 주의 성심 홀로, Choral 이문근, 허다한 마음중에 예수 성심 홀로, 성심',
   '205, 사랑의 성심, Trad Melody, 사랑의 샘 예수 성심 오늘날 우리돌보시며, 성심',
   '206, 성심의 사랑, 성심 수녀회 최병철, 주여 나를 드리오니 온전히 받으소서, 성심',
   '207, 주의 성심, 김귀자 최병철, 마음이 양선하고 겸손하신 성심, 성심',
   '208, 간절한 주의 사랑, Choral 새가톨릭성가편찬위원회, 간절한 주의 사랑이 맘에 넘치니, 성심',
   '209, 사랑하올 예수 성심이여 (Cor Dulce), 이문근, 사랑의 성심이시여 우리를 위한 사랑에, 성심',
   '210, 나의 생명 드리니, Wolfgang A Mozart, 나의 생명 드리니 주여 받아 주시어, 봉헌',
   '211, 주여 나의 몸과 맘, 주재효, 주여 나의 몸과 맘 모두 드리오니, 봉헌',
   '212, 너그러이 받으소서, 그레고리오 성가, 너그러이 받으소서 가난한 우리 선물을, 봉헌',
   '213, 제단에 예물을 드리려 할 때, 프랑스 성가 새가톨릭성가편찬위원회, 제단에 예물을 드리려 할 때, 봉헌',
   '214, 온 누리의 하느님, , 온 누리의 하느님 찬미받으소서, 봉헌',
   '215, 영원하신 성부, Michael Haler 새가톨릭성가편찬위원회, 영원하신 성부여 우리를 위하여, 봉헌',
   '216, 십자가에 제헌되신, 노트르담 수녀회, 십자가에 제헌되신 구원의 주 예수여, 봉헌',
   '217, 정성 어린 우리 제물, 김남수, 정성 어린 우리 제물 주님앞에 드리며, 봉헌',
   '218, 주여 당신 종이 여기, 이분매 이종철, 주여 당신 종이 여기 왔나이다, 봉헌',
   '219, 주여 몸과 맘 다 바치오니, 강청란 Louis Bourgeois, 주여 내 몸과 내 마음 기쁨과 설움 다 바치오니, 봉헌',
   '220, 생활한 제물, 손복희 Arthur H Brown, 주 예수께 드리는 생활한 제물, 봉헌',
   '221, 받아주소서, 성 이냐시오 기도 김영자, 주여 나를 온전히 받아주소서, 봉헌',
   '222, 주여 나를 가엾이 보아 주소서, 이종철, 주여 나를 가엾이 보아 주소서, 참회',
   '223, 주여 용서하여 주소서 (Parce Domine), 새가톨릭성가편찬위원회, 주여 당신 백성 용서하여 주소서, 참회',
   '224, 하느님 나를 불쌍히 여기소서, 그레고리오 성가, 하느님 자비하시니 나를 불쌍히 여기소서, 참회',
   '225, 주여 돌보소서 (Attende Domine), 그레고리오 성가 새가톨릭성가편찬위원회, 주님 앞에 죄를 범하였으니 우리 죄 용서하소서, 참회',
   '226, 하느님 자비하시니, 김금자, 하느님 자비하시니 나를 불쌍히 여기소서, 참회',
   '227, 나는 부활이요 생명이니라, 웨일스 성가, 나는 부활이요 생명이니, 위령',
   '228, 이 세상 떠난 형제, Chrétien dUrhan, 이 세상 떠난 형제 받아주옵소서, 위령',
   '229, 죽음에서 생명에로, 서행자, 용서로 죄사함의 희망주시는, 위령',
   '230, 평안함을 주소서, 이순금 B Martini, 주여 그들에게 길이 평안주소서, 위령',
   '231, 영원한 안식을 주소서, 강청란, 그들에게 영원히 평안함을 주옵소서, 위령',
   '232, 살아서 나를 믿는 이, 강청란 John B Dykes, 살아서 나를 믿는 이 영원히 죽지 않으리, 위령',
   '233, 주의 영원한 빛을, Trad Melody, 주여 세상 떠난 영혼 당신품에 받으소서, 위령',
   '234, 우리 자모, Choral, 우리 자모이신 성 마리아여, 성모',
   '235, 인자하신 성 마리아여, François ANC Delsarte 이문근, 인자하신 성 마리아여, 성모',
   '236, 사랑하올 어머니, , 사랑하올 어머니여 우리 위로자시여, 성모',
   '237, 주 예수 어머니, , 주 예수 어머니신 우리 성모 마리아, 성모',
   '238, 자모신 마리아, Cordula Wöhler Karl Kindsmüller, 자모신 마리아 축복하소서, 성모',
   '239, 거룩한 어머니, 김진균, 자애로운 마리아여 천상 어머니, 성모',
   '240, 복되신 마리아, Peter Piel, 형제들아 동정성모 찬양 노래 부르며, 성모',
   '241, 바다의 별이신 성모, 브리타니아 성가, 바다의 별이요 천주의 성모여, 성모',
   '242, 바다의 별이신, 브리타니아 성가 이문근, 바다의 별이신 성마리아여, 성모',
   '243, 마리아 모후여, Choral, 마리아 모후여 어지신 어머니, 성모',
   '244, 성모의 성월, , 성모 성월이요 제일 좋은 시절, 성모',
   '245, 맑은 하늘 오월은, RPL Lambillotte, 맑은 하늘 오월은 성모님의 달, 성모',
   '246, 창파에 뜬 일엽주, , 창파에 뜬 일엽주 풍랑에 시달리듯, 성모',
   '247, 애덕의 모여, A Soreau, 애덕의 모여 우리의 기도, 성모',
   '248, 한 생을 주님 위해, 손복희 Isaac B Woodbury, 한 생을 주님 위해 바치신 어머니, 성모',
   '249, 지극히 거룩한 동정녀, Choral 이문근, 지극히 거룩한 동정녀 마리아, 성모',
   '250, 굽어보소서 성모여, 슬로바키아 성가 손복희, 굽어보소서 성모여 인자하신 모여, 성모',
   '251, 무변 해상, RPL Lambillotte, 무변 해상 별이시요 천국드는 문이시며, 성모',
   '252, 성모여 우리 위해, 시칠리아 성가, 거룩하시고 인자하오신 우리 성모 마리아, 성모',
   '253, 네 머리를 꾸미오리, Choral 이문근, 네 머리를 꾸미오리 장미화와 백합화로, 성모',
   '254, 하늘의 여왕, 손복희 Trad Melody, 하늘여왕 어머니여, 성모',
   '255, 하늘의 여왕, Choral, 하늘의 여왕 되시는 오 마리아, 성모',
   '256, 천상의 어머니, 신원식, 사랑하오신 천상의 어머니 다 찬미의 노래 드리니, 성모',
   '257, 나의 기쁨 마리아여, 예수 수도회, 나의 기쁨 성 마리아 나의 어머니시여, 성모',
   '258, 구세주의 어머니여, 프랑스 성가 김광남 새가톨릭성가편찬위원회, 구세주의 어머니여 우리에게 오소서, 성모',
   '259, 성모 승천, Penot 이문근, 성모 마리아 하늘 나라에 들어올림 받으시니, 성모',
   '260, 영광의 성모, Choral 새가톨릭성가편찬위원회, 영광의 성모 마리아 빛나는 샛별이시여, 성모',
   '261, 죄 없이 잉태되신 마리아, , 아름답고 또 깨끗하시도다, 성모',
   '262, 고통의 어머니, 이순금 새가톨릭성가편찬위원회, 고통의 어머니 마리아여, 성모',
   '263, 십자가 길의 성모, 그레고리오 성가 새가톨릭성가편찬위원회, 주 예수님 높이 달린 십자곁에 성모서서, 성모',
   '264, 그 외아들, RPL Lambillotte 이문근, 그 외아들 죽으실 제 성모님이 애통하며, 성모',
   '265, 성모송, 김대붕, 은총이 가득하신 마리아님, 성모',
   '266, 성모송, 이연국, 은총이 가득하신 마리아님, 성모',
   '267, 성모송, 최병철, 은총이 가득하신 마리아님, 성모',
   '268, 여인 중에 복되신 성모, 최병철, 은총이 가득하신 마리아님, 성모',
   '269, 마리아의 노래, 그레고리오 성가, 내 영혼이 주를 찬송하며, 성모',
   '270, 로사리오의 기도 (환희의 신비), 브리타니아 성가, 천사가 알리신 말씀그대로, 성모',
   '271, 로사리오 기도드릴 때, 박기현, 기쁠때나 슬플때나 우리곁에 계시는, 성모',
   '272, 은총이 가득하신 마리아님 (Ave Maria), Lorenzo Perosi 새가톨릭성가편찬위원회, 은총이 가득하신 마리아님, 성모',
   '273, 성모송 (Ave Maria), 그레고리오 성가 새가톨릭성가편찬위원회, 은총이 가득하신 마리아님, 성모',
   '274, 성모송 (Ave Maria), Jacques Arcadelt, 은총이 가득하신 마리아님, 성모',
   '275, 바다의 별이신 성모 (Ave Maria Stella), Lorenzo Perosi, 바다의 별이요 천주의 모친이여, 성모',
   '276, 하늘의 여왕 (Salve Regina), 라틴어 성가, 하늘의 여왕되시는 오 마리아, 성모',
   '277, 하늘의 여왕 (Salve Regina), 라틴어 성가, 하늘의 여왕되시는 오 마리아, 성모',
   '278, 모후이시며 (Salve Regina), 그레고리오 성가 새가톨릭성가편찬위원회, 모후이시며 사랑이 넘친 어머니 우리의 생명, 성모',
   '279, 천상의 모후여 (Regina Caeli), 그레고리오 성가 새가톨릭성가편찬위원회, 하늘의 모후님 기뻐하소서, 성모',
   '280, 성 요셉 찬양하세, , 성 요셉 찬양하세 주님의 양부를, 성인',
   '281, 성 요셉, 살레시오 수녀회, 영원한 천주 성부가 간택하신 요셉, 성인',
   '282, 의로운 성 요셉, 전례위원회 성음악분과, 의로운 성 요셉 그 이름 부르며, 성인',
   '283, 순교자 찬가, 최민순 이문근, 장하다 순교자 주님의 용사여, 성인',
   '284, 무궁무진세에, Charles F Gounod, 무궁무진세에 천주께 영광이요, 성인',
   '285, 103위 순교 성인, 조화선 김영자, 순교로 빛을 밝힌 백삼위 성인, 성인',
   '286, 순교자의 믿음, HF Henry & JG Walton, 환난과 핍박중에서 순교로 믿음 지켰네, 성인',
   '287, 성 안드레아 김대건 신부 노래, 최민순 이문근, 서라벌 옛터전에 연꽃이 이울어라, 성인',
   '288, 성인 찬미가, 이동구 RJ Bodin, 우리선조 우리성인 용감한 승리자시여, 성인',
   '289, 병인 순교자 노래, 최민순 이문근, 피어라 순교자의 꽃들아, 성인',
   '290, 복음을 전한 사도들, Henry T Smart 새가톨릭성가편찬위원회, 사도들이 복음말씀 세상에 전파하며, 성인',
   '291, 사도 성 베드로와 바오로, 수도자의 기도, 교회의 반석 성베드로와, 성인',
   '292, 성녀 소화 데레사, 신원식 이문근, 위대한 사랑의 순교자 데레사여, 성인',
   '293, 보호 천사, 새가톨릭성가편찬위원회, 주께서 보내주신 하늘의 천사여, 성인',
   '294, 모든 성인 성녀시여, Choral, 하늘의 영광중에 참 행복누리는, 성인',
   '295, 성인 호칭 기도, 그레고리오 성가 새가톨릭성가편찬위원회, 주님 자비를 베푸소서, 성인',
   '296, 새 신자 환영, 박기현, 축하합니다 새신자 여러분, 축가',
   '297, 새로 난 한 형제, 박창득 현종건, 하느님 이름으로써 새로 난 우리들은, 축가',
   '298, 은혜로운 오늘, 김영선, 오 은혜로운 오늘 참 기쁜 축일이라, 축가',
   '299, 한 몸이 되게 축복을, Joseph Barnby, 끝없는 사랑 베푸시는 주여, 축가',
   '300, 사제의 마음, J Mitterer, 사제의 맘은 예수맘 우리를 애써 돌보시며, 축가',
   '301, 오늘 이 축제 날에, 안현숙 서병수, 오늘 이 축제 날에 하늘에 은총 있으라, 축가',
   '302, 사제, 김부자 김영자, 영원한 사제직에 부르심 받아, 축가',
   '303, 십자가 주님 따라, 박기현, 십자가 주님 따라 오롯이 삶을 바쳐, 축가',
   '304, 보아라 우리의 대사제 (Ecce Sacerdos Magnus), Lorenzo Perosi, 보아라 우리의 대사제, 축가',
   '305, 사제요 대제관 (Sacerdos et Pontifex), , 사제요 대제관은 사제요, 축가',
   '306, 자비송 (미사곡 하나), 김대붕, 주님 자비를 자비를 베푸소서, 미사곡',
   '307, 대영광송 (미사곡 하나), 김대붕, 하늘 높은 데서는 하느님께 영광, 미사곡',
   '308, 거룩하시도다 (미사곡 하나), 김대붕, 거룩하시도다 거룩하시도다, 미사곡',
   '309, 하느님의 어린양 (미사곡 하나), 김대붕, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '310, 자비송 (미사곡 둘), 손상오, 주님 자비를 베푸소서, 미사곡',
   '311, 대영광송 (미사곡 둘), 손상오, 하늘 높은 데서는 하느님께 영광, 미사곡',
   '312, 거룩하시도다 (미사곡 둘), 손상오, 거룩하시도다 거룩하시도다, 미사곡',
   '313, 하느님의 어린양 (미사곡 둘), 손상오, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '314, 신앙의 신비여 (미사곡 둘), 손상오, 신앙의 신비여 주님께서 오실때까지, 미사곡',
   '315, 자비송 (미사곡 셋), 이문근 새가톨릭성가편찬위원회, 주님 자비를 베푸소서, 미사곡',
   '316, 대영광송 (미사곡 셋), 이문근 새가톨릭성가편찬위원회, 하늘 높은 데서는 하느님께 영광, 미사곡',
   '317, 거룩하시도다 (미사곡 셋), 이문근 새가톨릭성가편찬위원회, 거룩하시도다 거룩하시도다, 미사곡',
   '318, 주님의 기도 (미사곡 셋), 이문근 새가톨릭성가편찬위원회, 하느님의 자녀되어 구세주의 분부대로, 미사곡',
   '319, 하느님의 어린양 (미사곡 셋), 이문근 새가톨릭성가편찬위원회, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '320, 자비송 (미사곡 넷), 이문근 새가톨릭성가편찬위원회, 주님 자비를 베푸소서, 미사곡',
   '321, 대영광송 (미사곡 넷), 이문근 새가톨릭성가편찬위원회, 하늘 높은 데서는 하느님께 영광, 미사곡',
   '322, 거룩하시도다 (미사곡 넷), 이문근 새가톨릭성가편찬위원회, 거룩하시도다 거룩하시도다, 미사곡',
   '323, 주님의 기도 (미사곡 넷), 이문근 새가톨릭성가편찬위원회, 하느님의 자녀되어 구세주의 분부대로, 미사곡',
   '324, 하느님의 어린양 (미사곡 넷), 이문근 새가톨릭성가편찬위원회, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '325, 자비송 (미사곡 다섯), 이문근 전례위원회 성음악분과, 주님 자비를 자비를 베푸소서, 미사곡',
   '326, 대영광송 (미사곡 다섯), 이문근 전례위원회 성음악분과, 하늘 높은 데서는 하느님께 영광, 미사곡',
   '327, 거룩하시도다 (미사곡 다섯), 이문근 전례위원회 성음악분과, 거룩하시도다 거룩하시도다, 미사곡',
   '328, 하느님의 어린양 (미사곡 다섯), 이문근 전례위원회 성음악분과, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '329, 미사 시작 (미사곡 여섯), Franz P Schubert, 기쁨이 넘쳐 뛸때 뉘와 함께 나누리, 미사곡',
   '330, 영광송 (미사곡 여섯), Franz P Schubert, 하늘에서는 천주께 영광 천사들도 즐겨 노래하네, 미사곡',
   '331, 복음 환호송 (미사곡 여섯), Franz P Schubert, 이 세상이 생기기 전 그 캄캄한 속에, 미사곡',
   '332, 봉헌 (미사곡 여섯), Franz P Schubert, 주님께서 내게 생명과 복음과 계명 주셨네, 미사곡',
   '333, 거룩하시도다 (미사곡 여섯), Franz P Schubert, 거룩하시도다 거룩하신 주, 미사곡',
   '334, 사랑의 성체성사 (미사곡 여섯), Franz P Schubert, 사랑의 정이 간절하신 우리 구세주 천주여, 미사곡',
   '335, 하느님의 어린양 (미사곡 여섯), Franz P Schubert, 내 주님 내 구세주 남기신 그 말씀, 미사곡',
   '336, 마침 성가 (미사곡 여섯), Franz P Schubert, 이제 주님 모신 우리 이웃 찾아가오며, 미사곡',
   '337, 미사 시작 (미사곡 일곱), Franz J Haydn, 엄위하온 천주여 당신 제대앞에, 미사곡',
   '338, 영광송 (미사곡 일곱), Franz J Haydn, 하늘높은 곳에는 주 천주께 영광, 미사곡',
   '339, 복음 환호송 (미사곡 일곱), Franz J Haydn, 우리 구세주 예수 복음을 선포하니, 미사곡',
   '340, 봉헌 (미사곡 일곱), Franz J Haydn, 주 우리 구하고자 십자가위에서, 미사곡',
   '341, 거룩하시도다 (미사곡 일곱), Franz J Haydn, 거룩하신 우리주 지존하신 천주, 미사곡',
   '342, 제물 드리니 (미사곡 일곱), Franz J Haydn, 보옵소서 천주 성부여 제대앞에 엎딘 죄인, 미사곡',
   '343, 하느님의 어린양 (미사곡 일곱), Franz J Haydn, 뉘웇는 마음으로 저 고통 보아라, 미사곡',
   '344, 영성체 (미사곡 일곱), Franz J Haydn, 만물의 대주재를 미약한 우리 죄인, 미사곡',
   '345, 미사 끝 (미사곡 일곱), Franz J Haydn, 희생된 천주 성자 제헌마치시니, 미사곡',
   '346, 미사 시작 (혼인 미사곡), 최민순 이문근, 시온산 예루살렘 평화의 도성안에, 미사곡',
   '347, 봉헌 (혼인 미사곡), 최민순 이문근, 거룩한 제단위에 제물입니다, 미사곡',
   '348, 거룩하시도다 (혼인 미사곡), 최민순 이문근, 거룩하시어라 거룩하시어라, 미사곡',
   '349, 마침 성가 (혼인 미사곡), 최민순 이문근, 카나촌 잔칫날을 성모님 빛내시고, 미사곡',
   '350, 자비송 (위령 미사곡 하나), 김대붕, 주님 자비를 자비를 베푸소서, 미사곡',
   '351, 거룩하시도다 (위령 미사곡 하나), 김대붕, 거룩하시도다 거룩하시도다, 미사곡',
   '352, 하느님의 어린양 (위령 미사곡 하나), 김대붕, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '353, 입당송 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 주님 그들에게 영원한 안식을 주소서, 미사곡',
   '354, 자비송 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 주님 자비를 베푸소서, 미사곡',
   '355, 화답송 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 주여 그들에게 영원한 안식을 주소서, 미사곡',
   '356, 연송 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 주여 죽은 모든 신자들의 영혼을, 미사곡',
   '357, 거룩하시도다 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 거룩하시도다 거룩하시도다, 미사곡',
   '358, 하느님의 어린양 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 하느님의 어린양 세상의 죄를 없애시는 주님, 미사곡',
   '359, 영성체송 (위령 미사곡 둘), 새가톨릭성가편찬위원회, 주님 영원한 빛을 그들에게 비추소서, 미사곡',
   '360, 화답송, 최병철, 주여 당신은 나에게 생명의 길을 가르치소서, 미사곡',
   '361, 화답송, 새가톨릭성가편찬위원회, , 미사곡',
   '362, 화답송, 새가톨릭성가편찬위원회, , 미사곡',
   '363, 예수님의 말씀을, , 예수님의 말씀을 귀기울여 들으며, 미사곡',
   '364, 복음 환호송, 그레고리오 성가 새가톨릭성가편찬위원회, 알렐루야 알렐루야 알렐루야, 미사곡',
   '365, 복음 환호송, 그레고리오 성가 새가톨릭성가편찬위원회, 알렐루야 알렐루야 알렐루야, 미사곡',
   '366, 복음 환호송, 최병철, 알렐루야 알렐루야 알렐루야, 미사곡',
   '367, 보편 지향 기도 응답, 최병철, 주님 저희의 기도를 들어주소서, 미사곡',
   '368, 보편 지향 기도 응답, 최병철, 주님 저희의 기도를 들어주소서, 미사곡',
   '369, 보편 지향 기도 응답, 최병철, 주님 저희의 기도를 들어주소서, 미사곡',
   '370, 보편 지향 기도 응답, 최병철, 주님 저희의 기도를 들어주소서, 미사곡',
   '371, 보편 지향 기도 응답, 최병철, 주님 주님 주님 주님, 미사곡',
   '372, 신앙의 신비여, 이종철, 신앙의 신비여 주님께서 오실 때까지, 미사곡',
   '373, 신앙의 신비여, 조선우, 신앙의 신비여 주님께서 오실 때까지, 미사곡',
   '374, 신앙의 신비여, 최병철, 신앙의 신비여 주님께서 오실 때까지, 미사곡',
   '375, 신앙의 신비여, 최병철, 신앙의 신비여 주님께서 오실 때까지, 미사곡',
   '376, 신앙의 신비여, 이연국, 신앙의 신비여 주님께서 오실 때까지, 미사곡',
   '377, 아멘, 이연국, 아멘 아멘 아멘, 미사곡',
   '378, 아멘, 덴마크 성가, 아멘 아멘 아멘, 미사곡',
   '379, 아멘, 덴마크 성가, 아멘 아멘 아멘, 미사곡',
   '380, 아멘, 그리스 성가, 아멘 아멘 아멘, 미사곡',
   '381, 아멘, 최병철, 아멘 아멘 아멘, 미사곡',
   '382, 아멘, 새가톨릭성가편찬위원회, 아멘 아멘 아멘, 미사곡',
   '383, 아멘, 새가톨릭성가편찬위원회, 아멘 아멘 아멘, 미사곡',
   '384, 아멘, 최병철, 아멘 아멘 아멘, 미사곡',
   '385, 아멘, , 아멘 아멘 아멘, 미사곡',
   '386, 아멘, 최병철, 아멘 아멘 아멘, 미사곡',
   '387, 주님의 기도, 이종철, 하늘에 계신 우리 아버지, 미사곡',
   '388, 주님의 기도, 최병철, 하늘에 계신 우리 아버지, 미사곡',
   '389, 주님께 나라와 권능과, , 주님께 나라와 권능과 영광이, 미사곡',
   '390, 주님께 나라와 권능과, 이연국, 주님께 나라와 권능과 영광이, 미사곡',
   '391, 그레고리오 성가 시편창 I 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '392, 그레고리오 성가 시편창 II 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '393, 그레고리오 성가 시편창 III 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '394, 그레고리오 성가 시편창 IV 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '395, 그레고리오 성가 시편창 V 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '396, 그레고리오 성가 시편창 VI 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '397, 그레고리오 성가 시편창 VII 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '398, 그레고리오 성가 시편창 VIII 선법, 새가톨릭성가편찬위원회, , 미사곡',
   '399, 주님 안에 하나, Sebastian Temple, 주님 안에 우리 모두 한마음, 연중',
   '400, 주님과 나는, Austris Wihtol, 주님과 나는 함께 길을 걸어가며, 연중',
   '401, 주를 찬미하여라, Ludwig van Beethoven, 천사들아 찬미하라 주를 찬미하여라, 연중',
   '402, 세상은 아름다워라, Soeur Sourire, 오 아름다워라 찬란한 세상 주님이 지었네, 연중',
   '403, 가난한 자입니다, 이종철, 오 나의 주여 가난한 죄인 주앞에 왔나이다, 연중',
   '404, 나는 주님을 찾습니다, 김수환 Odette Vercruysse, 나는 주님을 주님을 찾습니다, 연중',
   '405, 찬란한 광명이 내리던 날, John WPeterson, 찬란한 광명이 내리던 날 잊을수 없노라, 연중',
   '406, 세상에 외치고 싶어, 성 바오로 딸 수도회 Marcello Giombini, 세상에 외치고 싶어 당신이 누구신지, 연중',
   '407, 하나이신 천주, 이문근, 하나이신 네 천주를 만유위에 공경하며, 연중',
   '408, 주의 영광, FX Moreau 이문근, 전능하신 주의 영광을 현양하기 원하오니, 연중',
   '409, 아침 저녁, J Arnoud 이문근, 아침 저녁 우리 입 주의 찬미 부르며, 연중',
   '410, 예수 생각, Trad Melody, 예수 생각 그리워라, 연중',
   '411, 무궁세 우리 주를, Choral, 무궁세 우리 주를 찬미하나이다, 연중',
   '412, 만물의 이름 초월해, Choral 이문근, 만물의 이름 초월해 지존한 주의 성명, 연중',
   '413, 예루살렘 내 복된 집, 이탈리아 성가, 예루살렘 내 복된 집 나 언제나 가리, 연중',
   '414, 사랑하는 사람은 누구나, 원선오 새가톨릭성가편찬위원회, 사랑하는 사람은 누구나 하느님께로 부터 났으며, 연중',
   '415, 사랑이 없으면, 원선오 새가톨릭성가편찬위원회, 사랑이 없으면 나는 아무것도 아닙니다, 연중',
   '416, 좋기도 좋을시고, 원선오, 좋기도 좋을시고 아기자기한지고, 연중',
   '417, 주여 영광과 찬미를, 원선오, 주여 영광과 찬미를 주여 영광과 찬미를, 연중',
   '418, 새로운 노래를 불러, 원선오, 새로운 노래를 불러 찬미하며 풍류소리 드높이, 연중',
   '419, 밀알 하나가, 원선오, 밀알 하나가 땅에 떨어져, 연중',
   '420, 주님을 항상 내 앞에 모시오니, 원선오, 주님을 항상 내 앞에 모시오니, 연중',
   '421, 나는 세상의 빛입니다, 원선오 새가톨릭성가편찬위원회, 나는 세상의 빛입니다 나를 따르는 사람들은, 연중',
   '422, 당신을 애틋이 찾나이다, 원선오, 당신을 애틋이 찾나이다 내 영혼이, 연중',
   '423, 천년도 당신 눈에는, 원선오 새가톨릭성가편찬위원회, 천년도 당신 눈에는 지나간 어제같고, 연중',
   '424, 주님을 찬양하라 예루살렘아, 원선오, 주님을 찬양하라 예루살렘아, 연중',
   '425, 만군의 주님이여, 원선오, 만군의 주님이여 계시는 곳, 연중',
   '426, 주님의 집에 가자 할 때, 원선오, 주님의 집에 가자 할 때 우리는 몹시 기뻤노라, 연중',
   '427, 나는 거니오리다, 최명화, 나는 거니오리다 주님앞에서, 연중',
   '428, 무엇을 먹을까, 원선오 새가톨릭성가편찬위원회, 무엇을 먹을까 무엇을 마실까, 연중',
   '429, 알렐루야, 원선오, 알렐루야 알렐루야, 연중',
   '430, 기쁨으로 주님 섬겨드려라, 이종철, 기쁨으로 주님 섬겨드려라, 연중',
   '431, 찬미의 송가, 프랑스 성가, 주를 찬미하라 거룩하신 주, 연중',
   '432, 주여 날 인도하소서, 강청란 Johann Crüger, 날 인도하옵소서 밝은 빛이시여, 연중',
   '433, 주님은 나의 목자, 주재효, 주님은 나의 목자 아쉬울 것 없노라, 연중',
   '434, 산상 교훈, , 가난한 사람 행복한 자입니다, 연중',
   '435, 어린이처럼, 미국 성가, 즐겁게 노는 어린이처럼 푸르른 하늘 우러러보며, 연중',
   '436, 주 날개 밑, Ira D Sankey, 주 날개 밑 내가 편히 쉬리라 어두운 이밤에 바람부나, 연중',
   '437, 찬양하라 주님의 이름을, 새가톨릭성가편찬위원회, 찬양하라 주님을 그 이름 찬양하라, 연중',
   '438, 주께 감사드리자, 미국 성가 새가톨릭성가편찬위원회, 주께 감사드리자 세상만들어 주심, 연중',
   '439, 부드러운 주의 손이, 이종철 Lowern Wagner, 부드러운 주의 손이 나를 이끄시고, 연중',
   '440, 주님의 발자국 아는가, Sebastian Temple, 주님의 발자국 아는가, 연중',
   '441, 주의 나라 임하면, Sherman Bros, 생명을 바쳐 사랑하시는 위대한 주의 길을, 연중',
   '442, 주는 우리 행복, Ira F Stanphill, 구세주 예수 믿으옴이 얼마나 기쁜 행복인가, 연중',
   '443, 자애로우신 주님, 이순규, 주는 자애로우시고 인자하시다, 연중',
   '444, 나는 주를 의지하리라, Ethelbert W Bullinger, 나는 주를 의지하리, 연중',
   '445, 예수님 따르기로, 인도 성가 새가톨릭성가편찬위원회, 내 한평생을 예수님안에, 연중',
   '446, 우리는 주의 사랑을, , 우리는 주의 발자취를 이웃에서 보네, 연중',
   '447, 찬미 예수님, 미국 성가, 찬미 예수님 찬미 예수님, 연중',
   '448, 능하신 말씀을, , 어둠을 쫓으신 능하신 말씀을 주옵소서, 연중',
   '449, 부름받은 젊은이, , 가슴마다 파도친다 우리들을 젊은이, 연중',
   '450, 만방에 나아가서, 김금자 Lou Fortunate, 만방에 나아가서 모든 민족을 보라, 연중',
   '451, 주께 나아가리다, 미국 성가, 주께 나아가리다 주께 나아가리다, 연중',
   '452, 위험에 빠진 자에게, 미국 성가 윤영철, 위험에 빠진 자에게 평화를 주시고, 연중',
   '453, 푸르른 시냇가의, Oriel Johnson, 푸르른 시냇가의 물결이 흐르는, 연중',
   '454, 주님의 풍성한 강복을, 웨일스 성가 새가톨릭성가편찬위원회, 주님의 풍성한 강복을 받고서, 연중',
   '455, 주님을 따르려 모여 있는 우리, 이순금 John C Kittel, 주님을 따르려 모여 있는 우리를, 연중',
   '456, 둘이나 셋이 모인 곳에, Sebastian Temple, 둘이나 셋이 모인 곳 주님 계시네, 연중',
   '457, 일하며 기도하리다, 이순금, 제사를 드린 우리와 늘 함께 계시옵시며, 연중',
   '458, 주의 말씀 듣고, 손복희 John B Dykes, 주의 복음 전해듣고 전하러 가오니, 연중',
   '459, 너희는 가진 것 팔아, , 너희는 가진 것 팔아 불쌍한 자 도와주어라, 연중',
   '460, 오묘한 포도나무, 샬트르 성 바오로 수녀회, 오묘하다 포도나무 우리 주 예수 그리스도, 연중',
   '461, 엠마우스, 성염 원선오 새가톨릭성가편찬위원회, 서산에 노을이 고우나, 연중',
   '462, 이 세상 지나가고, Chrétien dUrhan Edward F Rimbault, 이 세상 지나가고 저 천국가까워, 연중',
   '463, 순례자의 노래, 이종철 Miriam T Winter, 인생은 언제나 외로움 속의 한순례자, 연중',
   '464, 예수의 이름, Johann S Bach, 귀양살이 우리 인생 밤낮으로 부르느니, 연중',
   '465, 구원의 희생, Lucien Deiss 새가톨릭성가편찬위원회, 하늘의 문을 여는 오 구원의 희생이여, 연중',
   '466, 오 위대한 선물이여, 미국 성가, 얼마나 위대한 선물인가 우리에게 주신 사랑, 연중',
   '467, 만민에게 전하자, 김남조 Richard, 성령이 내 마음에 날 부르셨네 부르셨네, 연중',
   '468, 그리스도는 나의 바위, 김남조 Miriam T Winter, 그리스도는 내 주님 내 반석, 연중',
   '469, 하늘의 성인들이여, 이종철, 하늘의 성인들이여 오소서, 위령',
   '470, 천상 낙원으로 데려가소서, 이종철, 천사들이여 이교우를 천상 낙원으로 데려가시고, 위령',
   '471, 강물처럼 흐르는 사랑, 미국 성가, 강물처럼 흐르는 사랑 너와 나로부터 흐르고, 연중',
   '472, 주님 저 하늘 펼치시고, 김남조 Molino, 온갖 두려움과 모든 근심 저멀리에 던져 버리오며, 연중',
   '473, 세상의 빛이시며, 노트르담 수녀회, 세상의 빛이시며 우리의 길잡이신, 연중',
   '474, 주여 사랑으로 하나 되게, Lucien Deiss, 주여 사랑으로 하나 되게 하소서, 연중',
   '475, 알렐루야, 최병철, 알렐루야 알렐루야, 연중',
   '476, 위대하신 왕이여, 미국 성가, 위대하신 왕이여 자비하신 하느님, 연중',
   '477, 그 소리 온 땅으로, 이종철, 그 소리 온 땅으로 퍼져나가고, 연중',
   '478, 주님께 영광을 드리자, 미국 청년 성가, 주님께 영광을 드리자 주님의 크신 사랑 전하자, 연중',
   '479, 기쁜 날, Edward F Rimbault, 주의 말씀 받은 그날 기쁘고도 복되어라, 연중',
   '480, 믿음으로, Paul Roder, 믿음으로 믿음으로 저산도 옮기리, 연중',
   '481, 요르단강에서, Bartholomäus Crasselius, 요르단강에서 들리는 저 외침 들어 보아라, 대림',
   '482, 일월성신을 내시고, Delfino Thermignon, 일월성신을 내시고 믿는 자들의 빛이신, 대림',
   '483, 사천 년 고대하던, 이문근, 사천 년 고대하던 우리의 구세주, 성탄',
   '484, 기쁘다 구주 오셨네, Georg F Händel, 기쁘다 구주 오셨네 만백성 맞으라, 성탄',
   '485, 동방에 나타난 별, Choral, 동방에 나타난 별로 주 천주삼왕 부르사, 성탄',
   '486, 거룩한 밤, 독일 Carol 배진구, 거룩한 밤 거룩한 밤, 성탄',
   '487, 동방의 세 박사, John H Hopkins Jr, 동방박사 세사람 귀한 선물 가지고, 성탄',
   '488, 하늘의 사신, Choral, 하늘의 사신 내려와 목동들에게 고하네, 성탄',
   '489, 보았나 십자가의 주님을, 흑인 영가, 보았나 십자가의 주님을, 사순',
   '490, 십자가에 가까이, William H Doane, 십자가에 가까이 나를 이끄시고, 사순',
   '491, 십자가 아래에, Ira F Stanphill, 십자가 아래에 나의집 짓고서, 사순',
   '492, 이 날이 주께서 마련하신 날, 최명화, 이 날이 주께서 마련하신 날, 부활',
   '493, 살아 계신 주 성령, Daniel Iverson, 살아 계신 주 성령 내게 오소서, 성령',
   '494, 사랑의 불을 놓으소서, Karol K Kurpiński, 오소서 성령이여 믿는 자의 위로여, 성령',
   '495, 성령이여 햇살같이, Miriam T Winter, 드맑게 흐르는 시냇물속에, 성령',
   '496, 주님은 우리 사랑하셨네, 흑인 영가, 누구보다 주님은 우리 사랑하셨네, 성체',
   '497, 거룩하신 성사여, Sebastian Temple, 주의 잔치에 모두모여와 생명양식 나누세, 성체',
   '498, 예수여 기리리다, 착한 목자 수녀회, 예수여 기리리다 거룩한 사랑을, 성체',
   '499, 만찬의 신비, 이순규 Robert L Pearsall, 만찬의 신비는 예수의 몸이시며, 성체',
   '500, 전능하신 주의 사랑, 독일 성가, 전능하신 주의 사랑 온땅에 넘치고, 성체',
   '501, 받으소서 우리 마음, Joseph Wise, 받으소서 우리마음과 우리사랑을, 성체',
   '502, 주의 빵을 서로 나누세, 흑인 영가 새가톨릭성가편찬위원회, 주의 빵을 서로 나누세, 성체',
   '503, 생명의 양식 (Panis Angelicus), César Franck, 생명의 양식을 우리게 주셨네, 성체',
   '504, 우리와 함께 주여, 원선오 새가톨릭성가편찬위원회, 우리와 함께 주여 머무르십시오, 성체',
   '505, 최후의 만찬, 강청란 Anna J Morse, 주는 최후만찬때에 사랑의 성사 세웠네, 성체',
   '506, 사랑으로 오신 주여, 성 바오로 딸 수도회 새가톨릭성가편찬위원회, 사랑으로 오신 주여 인류 구원하신, 성체',
   '507, 나의 주 예수여, 미국 성가, 길이요 생명이신 주 사랑의 샘이여, 성체',
   '508, 아베 베룸 (Ave Verum), 그레고리오 성가, 아베 베룸 꼬르뿌스 나뚬 데 마리아 비르지네, 성체',
   '509, 성심이여, Aloys Kunc, 성심이여 제대앞에 엎디어, 성심',
   '510, 주님께 올리는 기도, 이종철, 주님께 올리는 기도 분향같게 하옵시고, 봉헌',
   '511, 미약하온 우리 제물, 손복희 Thomas Haweis, 미약하온 우리 제물 자비로이 받아, 봉헌',
   '512, 주여 우리는 지금, , 주여 우리는 지금 주님 대전에, 봉헌',
   '513, 면병과 포도주, 강청란 Arthur S Sullivan, 면병과 포도주 함께 내 영혼 육신 모두, 봉헌',
   '514, 주여 대령했나이다, 이종철, 주여 이몸이 당신 뜻을 따르려 대령했나이다, 봉헌',
   '515, 주여 자비를 베푸시어, 윤선규, 주여 넘치도록 자비를 베푸시어, 참회',
   '516, 주여 당신 얼굴을, 원선오, 주여 당신 얼굴을 찾고 있사오니, 참회',
   '517, 내가 절망 속에, Dimitri S Bortniansky, 내가 절망 속에 주께 아뢰나이다, 참회',
   '518, 선한 사람 아흔아홉, 원선오, 선한 사람 아흔아홉보다 회개하는 죄인 하나를, 참회',
   '519, 영원한 안식을, 이종철, 주여 그들에게 안식을 주소서, 위령',
   '520, 오늘 이 세상 떠난, 샬트르 성 바오로 수녀회 새가톨릭성가편찬위원회, 오늘 이 세상 떠난 이 영혼 보소서, 위령',
   '521, 고통도 없으리라, 이종철, 하느님이 몸소 그들의 눈에서, 위령',
   '522, 성모송, 이종철, 은총이 가득하신 마리아님, 성모',
   '523, 지존하신 천주 성모, Choral 이문근, 지존한 천주 성모여 하늘의 문 바다의 별, 성모',
   '524, 성 마리아는, FX Moreau, 성 마리아는 천주 성삼의, 성모',
   '525, 거룩한 동정녀, Choral 이문근, 거룩한 동정녀 성마리아, 성모',
   '526, 즐기소서, Abbé Chabot, 즐기소서 하늘의 모후 알렐루야, 성모',
   '527, 내 영혼이 주님 안에서, 최명화, 내 영혼이 주님 안에서 크게 기뻐하나이다, 성모',
   '528, 축하합니다, 이종철, 축하합니다 당신의 영광스런, 축가',
];

const seasonidx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 13];

export { mdcombo, seasonidx };
