echo "          "
echo "          "
echo "=============================================================";
echo "||           _   _   _                      _      _       ||";
echo "||   ___ ___| |_| |_|_|___ ___    ___ ___ _| |___ |_|___   ||";
echo "||  | . | -_|  _|  _| |   | . |  |   | . | . | -_|| |_ -|  ||";
echo "||  |_  |___|_| |_| |_|_|_|_  |  |_|_|___|___|___|| |___|  ||";
echo "||  |___|                 |___|                 |___|      ||";
echo "||                                                         ||";
echo "=============================================================";
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get -y install nodejs

echo "          "
echo "          "
echo "============================================================================";
echo "||               ___ _             _                      _       _       ||";
echo "||   ___ ___ ___|  _|_|___ _ _ ___|_|___ ___    ___ ___ _| |___  |_|___   ||";
echo "||  |  _| . |   |  _| | . | | |  _| |   | . |  |   | . | . | -_| | |_ -|  ||";
echo "||  |___|___|_|_|_| |_|_  |___|_| |_|_|_|_  |  |_|_|___|___|___|_| |___|  ||";
echo "||                    |___|             |___|                  |___|      ||";
echo "||                                                                        ||";
echo "============================================================================";
cd ~
mkdir npm
npm config set prefix $HOME/npm
printf "NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules\nPATH=$PATH:$HOME/npm:$HOME/npm/bin\n" >> ~/.bashrc && source ~/.bashrc


echo "=====================================================================================";
echo "||                                                                                 ||";
echo "||   _         _       _ _        _     _       _                _     _           ||";
echo "||  |_|___ ___| |_ ___| | |   ___| |___| |_ ___| |   _____ ___ _| |_ _| |___ ___   ||";
echo "||  | |   |_ -|  _| .'| | |  | . | | . | . | .'| |  |     | . | . | | | | -_|_ -|  ||";
echo "||  |_|_|_|___|_| |__,|_|_|  |_  |_|___|___|__,|_|  |_|_|_|___|___|___|_|___|___|  ||";
echo "||                           |___|                                                 ||";
echo "||                                                                                 ||";
echo "=====================================================================================";
npm install -g forever