// Цели Яндекс Метрики: клики по контактам, скачивание резюме, переходы на живые проекты.
// Идентификаторы целей должны совпадать с целями типа «JavaScript-событие» в настройках счётчика.
(function () {
	var COUNTER_ID = 90510965;

	var CONTACTS = [
		{ goal: "contact_telegram", test: /^https?:\/\/t\.me\/Shvechkaa\/?$/i },
		{ goal: "contact_email", test: /^mailto:/i },
		{ goal: "contact_vk", test: /^https?:\/\/(www\.)?vk\.com\/anastasiashvechkova/i },
		{ goal: "contact_github", test: /^https?:\/\/(www\.)?github\.com\/Shvechkova/i },
		{ goal: "contact_instagram", test: /^https?:\/\/(www\.)?instagram\.com\/shvechka/i }
	];

	// Вёрстки и лендинги, которые лежат на этом же домене
	var LOCAL_PROJECTS = /^\/(DIA|Luka|belayaBereza)\//i;

	function send(goal, params) {
		if (typeof window.ym === "function") {
			window.ym(COUNTER_ID, "reachGoal", goal, params);
		}
	}

	function onClick(event) {
		var link = event.target.closest ? event.target.closest("a[href]") : null;
		if (!link) return;

		var href = link.href;

		for (var i = 0; i < CONTACTS.length; i++) {
			if (CONTACTS[i].test.test(href)) {
				send(CONTACTS[i].goal);
				send("contact_any", { channel: CONTACTS[i].goal.replace("contact_", "") });
				return;
			}
		}

		if (/\.pdf$/i.test(link.pathname)) {
			send("resume_download");
			return;
		}

		// Со страницы проекта — переход на живой сайт или вёрстку
		if (/\/proj-[^/]+\.html$/i.test(location.pathname)) {
			var isExternal = /^https?:$/.test(link.protocol) && link.hostname !== location.hostname;
			if (isExternal || LOCAL_PROJECTS.test(link.pathname)) {
				send("project_live", { url: href });
			}
		}
	}

	document.addEventListener("click", onClick, true);
	// Клик колёсиком (открытие в новой вкладке) событие click не вызывает
	document.addEventListener("auxclick", function (event) {
		if (event.button === 1) onClick(event);
	}, true);
})();
