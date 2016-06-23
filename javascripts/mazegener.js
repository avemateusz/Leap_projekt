// Generator labiryntu. Zaczałem pisac przed sesją ale ta jak zwykle zaskoczyła.

(function(){
	window.scene = new Physijs.Scene();
	var sprawdz=false;
	/*opis algorytmu:
	 * dodaj do sceny "ścianki" (czyli sceny u których: x<z<y albo y<z<x).
	 * ścianki mają zrobić kwadratowe boxy na całej podstawowej scenie.
	 * w kazdym boxie ustaw "sprawdz" na false
	 * 
	 * 1. wejdz do 1 boxu. usuń 1 losową ścianke, ustaw "sprawdź na true
	 * 2. sprawdz boxy obok. jeśli w kilku jest "sprawdz"=false wylosuj jeden. przejdz do niego i usun ścianke przez którą przeszedleś
	 * 3. jeśli jest jeden box z "sprawdz"=false wejdz do niego i usun scianke przez ktora przeszedleś
	 * 4. jesli wszystkie przystajace boxy maja "sprawdz"=true powroc do poprzedniego boxu
	 * 
	 * Powtarzaj kroki 1-4 az wszystkie boxy bedą miały "sprawdz"=true
	 */
});