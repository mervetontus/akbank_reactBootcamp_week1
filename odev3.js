/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */
/*
 const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]


move(17,6) // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5
*/
let folders = [
  {
      id: 5,
      name: 'Klasör 1',
      files: [
          { id: 17, name: 'profil.jpg' },
          { id: 18, name: 'manzara.jpg' },
      ],
  },
  {
      id: 6,
      name: 'Klasör 2',
      files: [
          { id: 21, name: 'profil.jpg' },
          { id: 22, name: 'dosya.xls' },
      ],
  },
  {
      id: 7,
      name: 'Klasör 3',
      files: [
          { id: 25, name: 'profil1.jpg' },
          { id: 26, name: 'dosya1.xls' },
      ],
  },
]

/*
move(17, 6) // dosyayı klasöre taşıyacak
copy(18, 7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5
*/


const removeFolder = (folderId) => {
  folders.filter((folder) => {
      folder.id !== folderId
  })
  folders = folders.filter((folder) => folder.id !== folderId)

}
removeFolder(6)


const remove = (fileId) => {
  folders.map((folder) => {
      folder.files?.map((file) => {
          if (file.id == fileId) {
              folder.files = folder.files.filter((x) => x.id !== fileId)
          }
      })
  })
}

remove(17)

//console.log(folders[0].files)

const move = (fileId, folderId) => {
  let data;
  folders.map((folder) => {
      folder.files?.map((file) => {
          if (file.id === fileId) {
              data = file;
          }
          folder.files = folder.files.filter((x) => x.id !== fileId);
      });
  });
  folders.map((folder) => {
      if (folder.id === folderId) {
          folder.files = [...folder.files, data]
      }
  });


}

move(18, 7)

//console.log(folders[1])

const copy = (fileId, folderId) => {
  let data;
  folders.map((folder) => {
      folder.files?.map((file) => {
          if (file.id === fileId) {
              data = file;
          }
      });
  });
  folders.map((folder) => {
      if (folder.id === folderId) {
          folder.files.push(data);
      }
  });
}

copy(18, 7)
//console.log(folders)

const parentFolderOf = (fileId) => {
  folders.map((folder) => {
      folder.files?.map((file) => {
          if (file.id === fileId) {
              console.log(folder.id);
          }
      });
  });
}

parentFolderOf(18)