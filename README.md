# chrome_extensions_tabs

Ce code utilise l'événement onActivated pour détecter lorsqu'un onglet est activé, puis utilise tabs.query pour récupérer tous les onglets de la fenêtre courante. Il utilise ensuite une boucle forEach pour parcourir tous les onglets et utilise tabs.update pour mettre à jour l'état de l'onglet. Si l'onglet est actif, il est débloqué, sinon il est bloqué.

Notez que pour utiliser ce code, vous devez avoir un fichier manifest.json dans votre extension, qui déclare les permissions nécessaires.

