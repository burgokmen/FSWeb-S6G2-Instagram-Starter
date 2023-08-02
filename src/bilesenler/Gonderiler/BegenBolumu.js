// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const [beniBegeniyorMusun, setBeniBegeniyorMusun] = useState()

const BegenBolumu = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiyiBegen, begeniSayisi } = props;

  const handleLike =( => {
    if (beniBegeniyorMusun) {
      
    }
  })


  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div onClick={gonderiyiBegen} className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{begeniSayisi}</p>
    </div>
  );
};

export default BegenBolumu;
