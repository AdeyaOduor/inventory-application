const db = require('./models/db');

const populateGenres = db.connection.then(() => db.genres.insertMany([
  { 'name':'Medicine', 'poster':'https://images.theconversation.com/files/257609/original/file-20190206-174880-1fbfwy5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip' },
  { 'name':'Curatives', 'poster':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLpxoHgvlUxBJdjUoNmLOKUp1lW7dbwwCpg&usqp=CAU' }
]));

const populateAnimes = db.connection.then(() => db.animes.insertMany([
  {
    'poster':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLpxoHgvlUxBJdjUoNmLOKUp1lW7dbwwCpg&usqp=CAU',
    'genre':'Stethescope', 'price':1500, 'stock':35, 
    'name':'One Piece',
    'description':'The stethoscope is an acoustic medical device for auscultation,   
          .concat('or listening to internal sounds of an animal or human body.')
          .concat('It typically has a small disc-shaped resonator that is placed against the skin,')
          .concat('and one or two tubes connected to two earpieces.')
  },
  {
    'poster':'https://images.unsplash.com/photo-1561328165-f0b762a9508e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'genre':'Shonen', 'price':6000, 'stock':22,
    'name':'Instruments !!',
    'description':'Haikyu!! (Japanese: ハイキュー!!, Hepburn: Haikyū!!, from the kanji 排球 "volleyball")'
	  .concat('is a Japanese manga series written and illustrated by Haruichi Furudate. The story ')
	  .concat('follows Shōyō Hinata, a boy determined to become a great volleyball player despite ')
	  .concat('his small stature. Its individual chapters were serialized in Weekly Shōnen Jump ')
	  .concat('from February 2012 through July 2020. As of August 2020, forty-four tankōbon volumes ')
	  .concat('have been released in Japan by Shueisha')
  },
  {
    'poster':'https://cdn.myanimelist.net/images/anime/1536/109462l.jpg',
    'genre':'Shonen', 'price':12000, 'stock': 23,
    'name':'Shingeki No Kyojin',
    'description':'Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing '
          .concat('Giant[s]") is a Japanese manga series written and illustrated by Hajime Isayama. It ')
          .concat('is set in a world where humanity lives within cities surrounded by enormous walls that ')
	  .concat('protect them from gigantic man-eating humanoids referred to as Titans; the story follows ')
	  .concat('Eren Yeager, who vows to retake the world after a Titan brings about the destruction of ')
	  .concat('his home town and the death of his mother. Attack on Titan has been serialized in Kodansha ')
	  .concat('monthly Bessatsu Shōnen Magazine since September 2009, and collected into 32 tankōbon ')
	  .concat('volumes as of September 2020.')
  },
  {
    'poster':'https://cdn.myanimelist.net/images/anime/6/7333l.jpg',
    'genre':'Horror', 'price':25000, 'stock':13,
    'name':'Hellsing Ultimate',
    'description':'Hellsing: Ultimate (ヘルシング Herushingu?) is an Original Video Animation series. The '
	 .concat('series was created after the Hellsing anime had finished, and was intended to be more true ')
	 .concat('to the manga than the anime was. Over the course of the years, they have changed animation ')
	 .concat('studios at multiple occasions. Hellsing Ultimate 1-4 were animated by the animation studio ')
	 .concat('Satelight, before Madhouse took over as of 5-7. It was then announced that a new company ')
	 .concat('would be animating the final three episodes of the series; Graphinica x Kelmadick, though ')
	 .concat('it is still being produced by Geneon.')

  }
]));

Promise.all([ populateGenres, populateAnimes ]).then(() =>
  console.log('done !!!'));
