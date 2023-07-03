const bogoDiscountCode = 'CHRISTMAS'
const freeItemIdsDisable = [ 39584652460126, 39584653017182, 39584653049950, 39584652853342, 39584653115486, 39584640696414, 39582288117854 ]
const freeItemId = sessionStorage.getItem( 'customBogoProductId' ) || 39584640696414
const bogoPrice = 99
const icons = {
  trash: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
  `,
  minus: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
  </svg>
  `,
  plus: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
  </svg>
  `
}
const freeItemApplied = [ '31048149368926', '31048149401694', '31048149434462', '31048149467230', '31048149499998', '31048149532766', '31048149565534', '31048149598302', '31048149631070', '31048149663838', '31048149696606', '31048149729374', '31048149762142', '31048149794910', '31048149827678', '31048149860446', '31048149893214', '31048149925982', '31048149958750', '31048149991518', '31048150024286', '31048150057054', '31048150089822', '31048150122590', '31048204189790', '31048204222558', '31048204320862', '31048204353630', '31048204451934', '31048204484702', '31048204583006', '31048204615774', '39553709113438', '39553708818526', '39553704001630', '39553709178974', '31549933453406', '31549933453406', '31486685085790', '31486686232670', '39553709211742', '32267890950238', '14944236732468', '14944190464052', '14944248922164', '14944206553140', '31159773855838', '31159776706654', '31159775527006', '14944270942260', '31159778541662', '30297551274036' ]

const rechargeProperties = { shipping_interval_frequency: '30', shipping_interval_unit_type: 'day' }

/* Formula Collection */
// Sub Items
const subFruitTub = { id: 39553709113438, quantity: 1, properties: rechargeProperties }
const subFruitPack = { id: 39553708818526, quantity: 1, properties: rechargeProperties }
const subOrangeTub = { id: 39553704001630, quantity: 1, properties: rechargeProperties }
const subOrangePack = { id: 39553709178974, quantity: 1, properties: rechargeProperties }
const subCapsule = { id: 39553709211742, quantity: 1, properties: rechargeProperties }
const subGreens = { id: 31549933453406, quantity: 1, properties: rechargeProperties }
const subCollagen = { id: 31486686232670, quantity: 1, properties: rechargeProperties }
const subChickpea = { id: 31486685085790, quantity: 1, properties: rechargeProperties }
const subFishOil = { id: 32267890950238, quantity: 1, properties: rechargeProperties }

// One time Items
const onetimeFruitTub = { id: 14944236732468, quantity: 1 }
const onetimeFruitPack = { id: 14944190464052, quantity: 1 }
const onetimeOrangeTub = { id: 14944248922164, quantity: 1 }
const onetimeOrangePack = { id: 14944206553140, quantity: 1 }
const onetimeCapsule = { id: 14944270942260, quantity: 1 }
const onetimeGreens = { id: 31159773855838, quantity: 1 }
const onetimeCollagen = { id: 31159775527006, quantity: 1 }
const onetimeChickpea = { id: 31159776706654, quantity: 1 }
const onetimeFishOil = { id: 31159778541662, quantity: 1 }
/* End Formula Collection */

/* Ambassador Formula Collection */
// Sub Items
const subFruitTubAmbassador = { id: 39586603761758, quantity: 1, properties: rechargeProperties }
const subFruitPackAmbassador = { id: 39586604089438, quantity: 1, properties: rechargeProperties }
const subOrangeTubAmbassador = { id: 39586603958366, quantity: 1, properties: rechargeProperties }
const subOrangePackAmbassador = { id: 39586603991134, quantity: 1, properties: rechargeProperties }
const subCapsuleAmbassador = { id: 39586604187742, quantity: 1, properties: rechargeProperties }
const subGreensAmbassador = { id: 39586604056670, quantity: 1, properties: rechargeProperties }
const subCollagenAmbassador = { id: 39586604122206, quantity: 1, properties: rechargeProperties }
// const subChickpeaAmbassador = { id: 39586604023902, quantity: 1, properties: rechargeProperties }
const subChickpeaAmbassador = { id: 39645316808798, quantity: 1, properties: rechargeProperties }
const subFishOilAmbassador = { id: 39586604154974, quantity: 1, properties: rechargeProperties }

// One time Items
const onetimeFruitTubAmbassador = { id: 39560702328926, quantity: 1 }
const onetimeFruitPackAmbassador = { id: 39560712618078, quantity: 1 }
const onetimeOrangeTubAmbassador = { id: 39560713109598, quantity: 1 }
const onetimeOrangePackAmbassador = { id: 39560714616926, quantity: 1 }
const onetimeCapsuleAmbassador = { id: 39560733327454, quantity: 1 }
const onetimeGreensAmbassador = { id: 39560718123102, quantity: 1 }
const onetimeCollagenAmbassador = { id: 39560726872158, quantity: 1 }
const onetimeChickpeaAmbassador = { id: 39560724545630, quantity: 1 }
const onetimeFishOilAmbassador = { id: 39560735457374, quantity: 1 }
/* End Ambassador Formula Collection */

/* Formula Collection */
// Subscription Bundles
// Subscription Ultimate Stack Bundle
const ultStackFruitTub = { id: 39594796843102, quantity: 1, type: 'sub', items: [ subFruitTub, subGreens, subCollagen, subChickpea, subFishOil ] }
const ultStackFruitPack = { id: 39594797301854, quantity: 1, type: 'sub', items: [ subFruitPack, subGreens, subCollagen, subChickpea, subFishOil ] }
const ultStackOrangeTub = { id: 39594798415966, quantity: 1, type: 'sub', items: [ subOrangeTub, subGreens, subCollagen, subChickpea, subFishOil ] }
const ultStackOrangePack = { id: 39594799202398, quantity: 1, type: 'sub', items: [ subOrangePack, subGreens, subCollagen, subChickpea, subFishOil ] }
const ultStackCapsule = { id: 39594797727838, quantity: 1, type: 'sub', items: [ subCapsule, subGreens, subCollagen, subChickpea, subFishOil ] }

// Subscription Essentials Bundle
const essBundleFruitTub = { id: 39594523918430, quantity: 1, type: 'sub', items: [ subFruitTub, subGreens ] }
const essBundleFruitPacket = { id: 39594524016734, quantity: 1, type: 'sub', items: [ subFruitPack, subGreens ] }
const essBundleOrangeTub = { id: 39594523951198, quantity: 1, type: 'sub', items: [ subOrangeTub, subGreens ] }
const essBundleOrangePack = { id: 39594523983966, quantity: 1, type: 'sub', items: [ subOrangePack, subGreens ] }
const essBundleCapsule = { id: 39594736910430, quantity: 1, type: 'sub', items: [ subCapsule, subGreens ] }

// Subscription Anti Aging
const antiAgeFruitTub = { id: 39597189726302, quantity: 1, type: 'sub', items: [ subFruitTub, subCollagen, subGreens ] }
const antiAgeFruitPack = { id: 39597189529694, quantity: 1, type: 'sub', items: [ subFruitPack, subCollagen, subGreens ] }
const antiAgeOrangeTub = { id: 39597189595230, quantity: 1, type: 'sub', items: [ subOrangeTub, subCollagen, subGreens ] }
const antiAgeOrangePack = { id: 39597189660766, quantity: 1, type: 'sub', items: [ subOrangePack, subCollagen, subGreens ] }
const antiAgeCapsule = { id: 39597189562462, quantity: 1, type: 'sub', items: [ subCapsule, subCollagen, subGreens ] }

// Subscription Protein Stack
const proStack = { id: 39594521755742, quantity: 1, type: 'sub', items: [ subChickpea, subCollagen ] }
const proStackFruitTub = { id: 39659518394462, quantity: 1, type: 'sub', items: [ subFruitTub, subChickpea, subCollagen ] }
const proStackFruitPack = { id: 39659518361694, quantity: 1, type: 'sub', items: [ subFruitPack, subChickpea, subCollagen ] }
const proStackOrangeTub = { id: 39659518427230, quantity: 1, type: 'sub', items: [ subOrangeTub, subChickpea, subCollagen ] }
const proStackOrangePack = { id: 39659518492766, quantity: 1, type: 'sub', items: [ subOrangePack, subChickpea, subCollagen ] }
const proStackCapsule = { id: 39659518459998, quantity: 1, type: 'sub', items: [ subCapsule, subChickpea, subCollagen ] }
const proStackIds = [ proStackFruitTub, proStackFruitPack, proStackOrangeTub, proStackOrangePack, proStackCapsule ]
// proStackFruitTub, proStackFruitPack, proStackOrangeTub, proStackOrangePack, proStackCapsule

// Subscription Immune Health
const immHealthFruitTub = { id: 39594529882206, quantity: 1, type: 'sub', items: [ subFruitTub, subGreens, subFishOil ] }
const immHealthFruitPack = { id: 39594529849438, quantity: 1, type: 'sub', items: [ subFruitPack, subGreens, subFishOil ] }
const immHealthOrangeTub = { id: 39594529783902, quantity: 1, type: 'sub', items: [ subOrangeTub, subGreens, subFishOil ] }
const immHealthOrangePack = { id: 39594529751134, quantity: 1, type: 'sub', items: [ subOrangePack, subGreens, subFishOil ] }
const immHealthCapsule = { id: 39594739499102, quantity: 1, type: 'sub', items: [ subCapsule, subGreens, subFishOil ] }

// One time Bundles
// One time Ultimate Stack Bundle
const ultStackFruitTubOneTime = { id: 39593454829662, quantity: 1, items: [ onetimeFruitTub, onetimeGreens, onetimeCollagen, onetimeChickpea, onetimeFishOil ] }
const ultStackFruitPackOneTime = { id: 39593454862430, quantity: 1, items: [ onetimeFruitPack, onetimeGreens, onetimeCollagen, onetimeChickpea, onetimeFishOil ] }
const ultStackOrangeTubOneTime = { id: 39593454895198, quantity: 1, items: [ onetimeOrangeTub, onetimeGreens, onetimeCollagen, onetimeChickpea, onetimeFishOil ] }
const ultStackOrangePackOneTime = { id: 39593455026270, quantity: 1, items: [ onetimeOrangePack, onetimeGreens, onetimeCollagen, onetimeChickpea, onetimeFishOil ] }
const ultStackCapsuleOneTime = { id: 39593903587422, quantity: 1, items: [ onetimeCapsule, onetimeGreens, onetimeCollagen, onetimeChickpea, onetimeFishOil ] }

// One time Essentials Bundle
const essBundleFruitTubOneTime = { id: 39593810002014, quantity: 1, items: [ onetimeFruitTub, onetimeGreens ] }
const essBundleFruitPacketOneTime = { id: 39593810690142, quantity: 1, items: [ onetimeFruitPack, onetimeGreens ] }
const essBundleOrangeTubOneTime = { id: 39593810296926, quantity: 1, items: [ onetimeOrangeTub, onetimeGreens ] }
const essBundleOrangePackOneTime = { id: 39593810788446, quantity: 1, items: [ onetimeOrangePack, onetimeGreens ] }
const essBundleCapsuleOneTime = { id: 39593904308318, quantity: 1, items: [ onetimeCapsule, onetimeGreens ] }

// One time Anti Aging
const antiAgeFruitTubOneTime = { id: 39593849192542, quantity: 1, items: [ onetimeFruitTub, onetimeCollagen, onetimeGreens ] }
const antiAgeFruitPackOneTime = { id: 39593849487454, quantity: 1, items: [ onetimeFruitPack, onetimeCollagen, onetimeGreens ] }
const antiAgeOrangeTubOneTime = { id: 39593849323614, quantity: 1, items: [ onetimeOrangeTub, onetimeCollagen, onetimeGreens ] }
const antiAgeOrangePackOneTime = { id: 39593849552990, quantity: 1, items: [ onetimeOrangePack, onetimeCollagen, onetimeGreens ] }
const antiAgeCapsuleOneTime = { id: 39593906471006, quantity: 1, items: [ onetimeCapsule, onetimeCollagen, onetimeGreens ] }

// One time Protein Stack
const proStackOneTime = { id: 39590452461662, quantity: 1, items: [ onetimeChickpea, onetimeCollagen ] }
const proStackFruitTubOneTime = { id: 39658796548190, quantity: 1, items: [ onetimeFruitTub, onetimeChickpea, onetimeCollagen ] }
const proStackFruitPackOneTime = { id: 39658801365086, quantity: 1, items: [ onetimeFruitPack, onetimeChickpea, onetimeCollagen ] }
const proStackOrangeTubOneTime = { id: 39658801266782, quantity: 1, items: [ onetimeOrangeTub, onetimeChickpea, onetimeCollagen ] }
const proStackOrangePackOneTime = { id: 39658801430622, quantity: 1, items: [ onetimeOrangePack, onetimeChickpea, onetimeCollagen ] }
const proStackCapsuleOneTime = { id: 39658801758302, quantity: 1, items: [ onetimeCapsule, onetimeChickpea, onetimeCollagen ] }
const proStackOneTimeIds = [ proStackFruitTubOneTime, proStackFruitPackOneTime, proStackOrangeTubOneTime, proStackOrangePackOneTime, proStackCapsuleOneTime ]
// proStackFruitTubOneTime, proStackFruitPackOneTime, proStackOrangeTubOneTime, proStackOrangePackOneTime, proStackCapsuleOneTime

// One time Immune Health
const immHealthFruitTubOneTime = { id: 39593898672222, quantity: 1, items: [ onetimeFruitTub, onetimeGreens, onetimeFishOil ] }
const immHealthFruitPackOneTime = { id: 39594066378846, quantity: 1, items: [ onetimeFruitPack, onetimeGreens, onetimeFishOil ] }
const immHealthOrangeTubOneTime = { id: 39593898770526, quantity: 1, items: [ onetimeOrangeTub, onetimeGreens, onetimeFishOil ] }
const immHealthOrangePackOneTime = { id: 39593898737758, quantity: 1, items: [ onetimeOrangePack, onetimeGreens, onetimeFishOil ] }
const immHealthCapsuleOneTime = { id: 39593906536542, quantity: 1, items: [ onetimeCapsule, onetimeGreens, onetimeFishOil ] }
/* End Formula Collection */

/* Ambassador Formula Collection */
// Subscription Bundles
// Subscription Ultimate Stack Bundle
const ultStackFruitTubAmbassador = { id: 39597247496286, quantity: 1, type: 'sub', items: [ subFruitTubAmbassador, subGreensAmbassador, subCollagenAmbassador, subChickpeaAmbassador, subFishOilAmbassador ] }
const ultStackFruitPackAmbassador = { id: 39597247594590, quantity: 1, type: 'sub', items: [ subFruitPackAmbassador, subGreensAmbassador, subCollagenAmbassador, subChickpeaAmbassador, subFishOilAmbassador ] }
const ultStackOrangeTubAmbassador = { id: 39597247037534, quantity: 1, type: 'sub', items: [ subOrangeTubAmbassador, subGreensAmbassador, subCollagenAmbassador, subChickpeaAmbassador, subFishOilAmbassador ] }
const ultStackOrangePackAmbassador = { id: 39597783515230, quantity: 1, type: 'sub', items: [ subOrangePackAmbassador, subGreensAmbassador, subCollagenAmbassador, subChickpeaAmbassador, subFishOilAmbassador ] }
const ultStackCapsuleAmbassador = { id: 39597789708382, quantity: 1, type: 'sub', items: [ subCapsuleAmbassador, subGreensAmbassador, subCollagenAmbassador, subChickpeaAmbassador, subFishOilAmbassador ] }

// Subscription Essentials Bundle
const essBundleFruitTubAmbassador = { id: 39597247135838, quantity: 1, type: 'sub', items: [ subFruitTubAmbassador, subGreensAmbassador ] }
const essBundleFruitPacketAmbassador = { id: 39597247430750, quantity: 1, type: 'sub', items: [ subFruitPackAmbassador, subGreensAmbassador ] }
const essBundleOrangeTubAmbassador = { id: 39597247168606, quantity: 1, type: 'sub', items: [ subOrangeTubAmbassador, subGreensAmbassador ] }
const essBundleOrangePackAmbassador = { id: 39597247234142, quantity: 1, type: 'sub', items: [ subOrangePackAmbassador, subGreensAmbassador ] }
const essBundleCapsuleAmbassador = { id: 39597247201374, quantity: 1, type: 'sub', items: [ subCapsuleAmbassador, subGreensAmbassador ] }

// Subscription Anti Aging
const antiAgeFruitTubAmbassador = { id: 39597247004766, quantity: 1, type: 'sub', items: [ subFruitTubAmbassador, subCollagenAmbassador, subGreensAmbassador ] }
const antiAgeFruitPackAmbassador = { id: 39597247103070, quantity: 1, type: 'sub', items: [ subFruitPackAmbassador, subCollagenAmbassador, subGreensAmbassador ] }
const antiAgeOrangeTubAmbassador = { id: 39597246971998, quantity: 1, type: 'sub', items: [ subOrangeTubAmbassador, subCollagenAmbassador, subGreensAmbassador ] }
const antiAgeOrangePackAmbassador = { id: 39597247070302, quantity: 1, type: 'sub', items: [ subOrangePackAmbassador, subCollagenAmbassador, subGreensAmbassador ] }
const antiAgeCapsuleAmbassador = { id: 39597246939230, quantity: 1, type: 'sub', items: [ subCapsuleAmbassador, subCollagenAmbassador, subGreensAmbassador ] }

// Subscription Protein Stack
const proStackAmbassador = { id: 39597247332446, quantity: 1, type: 'sub', items: [ subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackFruitTubAmbassador = { id: 39661474087006, quantity: 1, type: 'sub', items: [ subFruitTubAmbassador, subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackFruitPackAmbassador = { id: 39661474283614, quantity: 1, type: 'sub', items: [ subFruitPackAmbassador, subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackOrangeTubAmbassador = { id: 39661474185310, quantity: 1, type: 'sub', items: [ subOrangeTubAmbassador, subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackOrangePackAmbassador = { id: 39661474250846, quantity: 1, type: 'sub', items: [ subOrangePackAmbassador, subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackCapsuleAmbassador = { id: 39661474218078, quantity: 1, type: 'sub', items: [ subCapsuleAmbassador, subChickpeaAmbassador, subCollagenAmbassador ] }
const proStackAmbassadorIds = [ proStackFruitTubAmbassador, proStackFruitPackAmbassador, proStackOrangeTubAmbassador, proStackOrangePackAmbassador, proStackCapsuleAmbassador ]
// proStackFruitTubAmbassador, proStackFruitPackAmbassador, proStackOrangeTubAmbassador, proStackOrangePackAmbassador, proStackCapsuleAmbassador

// Subscription Immune Health
const immHealthFruitTubAmbassador = { id: 39597247365214, quantity: 1, type: 'sub', items: [ subFruitTubAmbassador, subGreensAmbassador, subFishOilAmbassador ] }
const immHealthFruitPackAmbassador = { id: 39597247266910, quantity: 1, type: 'sub', items: [ subFruitPackAmbassador, subGreensAmbassador, subFishOilAmbassador ] }
const immHealthOrangeTubAmbassador = { id: 39597847085150, quantity: 1, type: 'sub', items: [ subOrangeTubAmbassador, subGreensAmbassador, subFishOilAmbassador ] }
const immHealthOrangePackAmbassador = { id: 39597247299678, quantity: 1, type: 'sub', items: [ subOrangePackAmbassador, subGreensAmbassador, subFishOilAmbassador ] }
const immHealthCapsuleAmbassador = { id: 39597247463518, quantity: 1, type: 'sub', items: [ subCapsuleAmbassador, subGreensAmbassador, subFishOilAmbassador ] }

// One time Bundles
// One time Ultimate Stack Bundle
const ultStackFruitTubOneTimeAmbassador = { id: 39596830523486, quantity: 1, items: [ onetimeFruitTubAmbassador, onetimeGreensAmbassador, onetimeCollagenAmbassador, onetimeChickpeaAmbassador, onetimeFishOilAmbassador ] }
const ultStackFruitPackOneTimeAmbassador = { id: 39596830621790, quantity: 1, items: [ onetimeFruitPackAmbassador, onetimeGreensAmbassador, onetimeCollagenAmbassador, onetimeChickpeaAmbassador, onetimeFishOilAmbassador ] }
const ultStackOrangeTubOneTimeAmbassador = { id: 39596830556254, quantity: 1, items: [ onetimeOrangeTubAmbassador, onetimeGreensAmbassador, onetimeCollagenAmbassador, onetimeChickpeaAmbassador, onetimeFishOilAmbassador ] }
const ultStackOrangePackOneTimeAmbassador = { id: 39596830654558, quantity: 1, items: [ onetimeOrangePackAmbassador, onetimeGreensAmbassador, onetimeCollagenAmbassador, onetimeChickpeaAmbassador, onetimeFishOilAmbassador ] }
const ultStackCapsuleOneTimeAmbassador = { id: 39596830687326, quantity: 1, items: [ onetimeCapsuleAmbassador, onetimeGreensAmbassador, onetimeCollagenAmbassador, onetimeChickpeaAmbassador, onetimeFishOilAmbassador ] }

// One time Essentials Bundle
const essBundleFruitTubOneTimeAmbassador = { id: 39596830818398, quantity: 1, items: [ onetimeFruitTubAmbassador, onetimeGreensAmbassador ] }
const essBundleFruitPacketOneTimeAmbassador = { id: 39596830916702, quantity: 1, items: [ onetimeFruitPackAmbassador, onetimeGreensAmbassador ] }
const essBundleOrangeTubOneTimeAmbassador = { id: 39596830883934, quantity: 1, items: [ onetimeOrangeTubAmbassador, onetimeGreensAmbassador ] }
const essBundleOrangePackOneTimeAmbassador = { id: 39596830949470, quantity: 1, items: [ onetimeOrangePack, onetimeGreensAmbassador ] }
const essBundleCapsuleOneTimeAmbassador = { id: 39596830982238, quantity: 1, items: [ onetimeCapsuleAmbassador, onetimeGreensAmbassador ] }

// One time Anti Aging
const antiAgeFruitTubOneTimeAmbassador = { id: 39596831080542, quantity: 1, items: [ onetimeFruitTubAmbassador, onetimeCollagenAmbassador, onetimeGreensAmbassador ] }
const antiAgeFruitPackOneTimeAmbassador = { id: 39596831146078, quantity: 1, items: [ onetimeFruitPackAmbassador, onetimeCollagenAmbassador, onetimeGreensAmbassador ] }
const antiAgeOrangeTubOneTimeAmbassador = { id: 39596831113310, quantity: 1, items: [ onetimeOrangeTubAmbassador, onetimeCollagenAmbassador, onetimeGreensAmbassador ] }
const antiAgeOrangePackOneTimeAmbassador = { id: 39596831211614, quantity: 1, items: [ onetimeOrangePackAmbassador, onetimeCollagenAmbassador, onetimeGreensAmbassador ] }
const antiAgeCapsuleOneTimeAmbassador = { id: 39596831244382, quantity: 1, items: [ onetimeCapsuleAmbassador, onetimeCollagenAmbassador, onetimeGreensAmbassador ] }

// One time Protein Stack
const proStackOneTimeAmbassador = { id: 39596831277150, quantity: 1, items: [ onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackFruitTubOneTimeAmbassador = { id: 39661467369566, quantity: 1, items: [ onetimeFruitTubAmbassador, onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackFruitPackOneTimeAmbassador = { id: 39661468614750, quantity: 1, items: [ onetimeFruitPackAmbassador, onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackOrangeTubOneTimeAmbassador = { id: 39661468221534, quantity: 1, items: [ onetimeOrangeTubAmbassador, onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackOrangePackOneTimeAmbassador = { id: 39661468745822, quantity: 1, items: [ onetimeOrangePackAmbassador, onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackCapsuleOneTimeAmbassador = { id: 39661469401182, quantity: 1, items: [ onetimeCapsuleAmbassador, onetimeChickpeaAmbassador, onetimeCollagenAmbassador ] }
const proStackOneTimeAmbassadorIds = [ proStackFruitTubOneTimeAmbassador, proStackFruitPackOneTimeAmbassador, proStackOrangeTubOneTimeAmbassador, proStackOrangePackOneTimeAmbassador, proStackCapsuleOneTimeAmbassador ]
// proStackFruitTubOneTimeAmbassador, proStackFruitPackOneTimeAmbassador, proStackOrangeTubOneTimeAmbassador, proStackOrangePackOneTimeAmbassador, proStackCapsuleOneTimeAmbassador

// One time Immune Health
const immHealthFruitTubOneTimeAmbassador = { id: 39596831866974, quantity: 1, items: [ onetimeFruitTubAmbassador, onetimeGreensAmbassador, onetimeFishOilAmbassador ] }
const immHealthFruitPackOneTimeAmbassador = { id: 39596831932510, quantity: 1, items: [ onetimeFruitPackAmbassador, onetimeGreensAmbassador, onetimeFishOilAmbassador ] }
const immHealthOrangeTubOneTimeAmbassador = { id: 39596831899742, quantity: 1, items: [ onetimeOrangeTubAmbassador, onetimeGreensAmbassador, onetimeFishOilAmbassador ] }
const immHealthOrangePackOneTimeAmbassador = { id: 39596831998046, quantity: 1, items: [ onetimeOrangePackAmbassador, onetimeGreensAmbassador, onetimeFishOilAmbassador ] }
const immHealthCapsuleOneTimeAmbassador = { id: 39596832292958, quantity: 1, items: [ onetimeCapsuleAmbassador, onetimeGreensAmbassador, onetimeFishOilAmbassador ] }
/* End Ambassador Formula Collection */

let addToCarts = []
let bundleProducts = []
let checkoutUrl = '/checkout'
bundleProducts = bundleProducts.concat( ultStackFruitTub, ultStackFruitPack, ultStackOrangeTub, ultStackOrangePack, ultStackCapsule, essBundleFruitTub, essBundleFruitPacket, essBundleOrangeTub, essBundleOrangePack, essBundleCapsule, antiAgeFruitTub, antiAgeFruitPack, antiAgeOrangeTub, antiAgeOrangePack, antiAgeCapsule, proStack, immHealthFruitTub, immHealthFruitPack, immHealthOrangeTub, immHealthOrangePack, immHealthCapsule, ultStackFruitTubOneTime, ultStackFruitPackOneTime, ultStackOrangeTubOneTime, ultStackOrangePackOneTime, ultStackCapsuleOneTime, essBundleFruitTubOneTime, essBundleFruitPacketOneTime, essBundleOrangeTubOneTime, essBundleOrangePackOneTime, essBundleCapsuleOneTime, antiAgeFruitTubOneTime, antiAgeFruitPackOneTime, antiAgeOrangeTubOneTime, antiAgeOrangePackOneTime, antiAgeCapsuleOneTime, proStackOneTime, immHealthFruitTubOneTime, immHealthFruitPackOneTime, immHealthOrangeTubOneTime, immHealthOrangePackOneTime, immHealthCapsuleOneTime, ultStackFruitTubAmbassador, ultStackFruitPackAmbassador, ultStackOrangeTubAmbassador, ultStackOrangePackAmbassador, ultStackCapsuleAmbassador, essBundleFruitTubAmbassador, essBundleFruitPacketAmbassador, essBundleOrangeTubAmbassador, essBundleOrangePackAmbassador, essBundleCapsuleAmbassador, antiAgeFruitTubAmbassador, antiAgeFruitPackAmbassador, antiAgeOrangeTubAmbassador, antiAgeOrangePackAmbassador, antiAgeCapsuleAmbassador, proStackAmbassador, immHealthFruitTubAmbassador, immHealthFruitPackAmbassador, immHealthOrangeTubAmbassador, immHealthOrangePackAmbassador, immHealthCapsuleAmbassador, ultStackFruitTubOneTimeAmbassador, ultStackFruitPackOneTimeAmbassador, ultStackOrangeTubOneTimeAmbassador, ultStackOrangePackOneTimeAmbassador, ultStackCapsuleOneTimeAmbassador, essBundleFruitTubOneTimeAmbassador, essBundleFruitPacketOneTimeAmbassador, essBundleOrangeTubOneTimeAmbassador, essBundleOrangePackOneTimeAmbassador, essBundleCapsuleOneTimeAmbassador, antiAgeFruitTubOneTimeAmbassador, antiAgeFruitPackOneTimeAmbassador, antiAgeOrangeTubOneTimeAmbassador, antiAgeOrangePackOneTimeAmbassador, antiAgeCapsuleOneTimeAmbassador, proStackOneTimeAmbassador, immHealthFruitTubOneTimeAmbassador, immHealthFruitPackOneTimeAmbassador, immHealthOrangeTubOneTimeAmbassador, immHealthOrangePackOneTimeAmbassador, immHealthCapsuleOneTimeAmbassador )
bundleProducts = bundleProducts.concat( proStackIds, proStackOneTimeIds, proStackOneTimeAmbassadorIds, proStackAmbassadorIds )

async function loadCart( bol = true ) {
  const response = await fetch('/cart.js');
  const data = await response.json();
  window.cart = data;
  if (response.status == 200) {
    updateCart( bol );
  }
}

async function deleteItem(id) {
  const form_state = $( '#form_state' ).val()

  if ( form_state ) {
    let _form_state = form_state.split( ',' )
    _form_state.push( id )
    $( '#form_state' ).val( _form_state.join() )

  } else {
    $( '#form_state' ).val( id )
  }
  // Default options are marked with *
  let data = {
    id: id,
    quantity: 0,
  };
  const response = await fetch('/cart/change.js', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Delete item from cart and hide it
$( document ).on('click', '.cart__item-delete', function (e) {
  const variantId = $( this ).data( 'item-id' ).toString()
  e.preventDefault();
  deleteItem(variantId).then((res) => {
    const toRemove = `#cart__item-${variantId}-container`
    $( toRemove ).toggleClass( 'alert-danger' ).fadeOut(300, function () {
      $( this ).remove();
      const findVariant = window.cart.items.findIndex( (e) => e.id == variantId );
      findVariant.quantity = 0;
      window.cart.items.pop(findVariant);

      /* if ( variantId == freeItemId ) {
        removeBogo()
      } */

    //   updateCartSubtotal();
    });
    // checkBogo()
    updateCartSubtotal();
    updateSubscriptionSavings();
    // updateAutoSavings15();
    updateShippingSavings();
    updateLineItem(variantId);
    getSubscriptionSavingsNew();
    // getAutoSavings15();
    updateCouponSavings();
    updateTotalSavings();
    countSubscriptionItems()
    updateCheckoutButton();
    updateShippingFee();
    renderEmptyCart();

    delayRecountSubs()
  });
});


/**
 * @description check if cart table has bogo code and bogo product
 */
 function checkBogo() {
  fetch( '/cart.js' ).then( r => r.json() ).then( ( data ) => {
    const cartItems = data.items
    const hasFreeItems = []
    const totalPrices = []
    const codeVal = $( '#cart__coupon-code' ).val()
    $( '#cart__coupon-error' ).removeClass( 'd-block' )
    $( '#cart__coupon-error-invalid' ).removeClass( 'd-block' )
    $( '#cart__coupon-error' ).addClass( 'd-none' )
    $( '#cart__coupon-error-invalid' ).addClass( 'd-none' )

    freeItemApplied.forEach( function( el ) {
      if ( cartItems.length > 0 ) {
        cartItems.forEach( function( item ) {
          if ( item.id == el ) hasFreeItems.push( item )
        } )
      }
    } )

    hasFreeItems.forEach( function( hasFreeItem ) {
      const _total_price = Number( ( hasFreeItem.quantity * hasFreeItem.price ) / 100 )
      totalPrices.push( _total_price )
    } )

    if ( codeVal ) {
      if ( isCodeBogo() ) {
        if ( hasFreeItems.length > 0 ) {
          const freeItemExist = cartItems.find( x => x.variant_id == freeItemId )
          const bogoConfirm = checkBogoConfirm( freeItemExist, totalPrices )
          if ( bogoConfirm ) {
            addBogo()
            bogoMessage( false )
          } else {
            removeBogo()
            bogoMessage( true )
          }
        } else {
          removeBogo()
          bogoMessage( true )
        }
      } else {
        removeBogo( false )
      }
    } else {
      $( '#calculator-loading' ).hide()
      $( '#calculator-content' ).show()
      removeBogo()
    }
  } )
}

/**
 * @description check the value of the coupon code input
 * @returns {boolean}
 */
function isCodeBogo() {
  const inputCodeVal = $( '#cart__coupon-code' ).val()
  const sessionCodeVal = window.sessionStorage.getItem( 'discountCode' )
  const codeVal = ( inputCodeVal ) ? inputCodeVal : ( sessionCodeVal ) ? sessionCodeVal : ''
  const bol = compareLocaleString( codeVal, bogoDiscountCode )
  
  return bol
}

/**
 * 
 * @param {*} str1 string number 1
 * @param {*} str2 string number 2
 * @returns {boolean}
 */
const compareLocaleString = ( str1, str2 ) => {
  return ( typeof str1 === 'string' && typeof str2 === 'string' ) 
      ? str1.localeCompare( str2, undefined, { sensitivity: 'accent' } ) === 0 
      : str1 === str2
}

/**
 * @description check if the free item exist in cart and the total cart exceed $99
 * @param {*} freeItemExist free item in cart object
 * @param {*} totalPrices array of prices of cart items
 * @returns {boolean}
 */
 function checkBogoConfirm( freeItemExist, totalPrices ) {
  let confirm = false
  const totalPrice = totalPrices.reduce( ( prev_val, val ) => prev_val + val, 0 )

  if ( freeItemExist && totalPrice < bogoPrice ) confirm = false
  if ( freeItemExist && totalPrice > bogoPrice ) confirm = true
  if ( ! freeItemExist && totalPrice > bogoPrice ) confirm = true
  if ( ! freeItemExist && totalPrice < bogoPrice ) confirm = false

  return confirm
}

/**
 * @description hide or display bogo message
 */
function bogoMessage( display = false ) {
  if ( display ) {
    $( '#cart__coupon-error-invalid' ).addClass( 'd-block' )
    $( '#cart__coupon-error-invalid' ).removeClass( 'd-none' )
  } else {
    $( '#cart__coupon-error-invalid' ).addClass( 'd-none' )
    $( '#cart__coupon-error-invalid' ).removeClass( 'd-block' )
  }
}

/**
 * @description remove bogo item and code
 */
function removeBogo( isBogo = true ) {
  const items = window.cart.items

  if ( items.length > 0 ) {
    const findVariant = window.cart.items.findIndex( ( e ) => e.id == freeItemId )

    if ( findVariant !== -1 ) {
      deleteItem( freeItemId.toString() ).then( ( res ) => {
        $( `#cart__item-${freeItemId}-container` ).remove()
        findVariant.quantity = 0
        window.cart.items.splice( findVariant, 1 )
      } )
    }
  }

  removeBogoCode( isBogo ).then( () => {
    setTimeout(() => {
      loadCart( false )
      renderEmptyCart()
    }, 800 )
  } )
}

/**
 * @description add a free product based on the discount code manually
 */
function addBogo() {
  fetch( '/cart.js' ).then( r => r.json() ).then( res => {
    const items = res.items
    const freeExist = items.find( x => x.id == freeItemId )
    const data = {
      'items': [ { id: freeItemId, quantity: 1 } ]
    }

    if ( ! freeExist ) {
      fetch( '/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      } )
      .then( r => r.json() )
      .then( res => displayFreeProdInTable( res.items ) )
    }
  } )
}

/**
 * @description remove the discount code applied
 * @param items cart items 
 */
async function removeBogoCode( isBogo = true ) {
  if ( isBogo ) {
    window.sessionStorage.removeItem( 'discountCode' )
    window.sessionStorage.setItem( 'discountAmount', 0 )
    window.sessionStorage.setItem( 'discountType', '$' )

    $( '#cart__coupon-code' ).val( '' )
    const response = await fetch( '/cart.js' )
    const data = await response.json()
    window.cart = data
    return data
  }
}

// Removes quantity of 1 from line item
$('.quantity-left-minus').on('click', function (e) {
  const variantId = e.currentTarget.dataset.itemId;
  const findVariant = window.cart.items.find((e) => e.id == variantId);
  let qtyValue = findVariant.quantity;
  findVariant.quantity -= 1;
  if (findVariant.quantity === 0) {
    Shopify.removeItem(variantId, function () {
      $(`#cart__item-${variantId}-container`)
        .toggleClass('alert-danger')
        .fadeOut(300, function () {
          $(this).remove();
        });
    });
  }
  Shopify.changeItem(variantId, findVariant.quantity, function (e) {
    loadCart().then( () => {
      // checkBogo()
      updateSubscriptionSavings();
      // updateAutoSavings15();
      updateShippingSavings();
      updateLineItem(variantId);
      getSubscriptionSavingsNew();
      // getAutoSavings15();
      updateCartSubtotal();
      updateCouponSavings();
      updateTotalSavings();
      countSubscriptionItems()
      updateCheckoutButton();
      updateShippingFee();
      renderEmptyCart();
    } )
  });
});

// Adds quantity of 1 to line item
$('.quantity-right-plus').on('click', function (e) {
  const variantId = e.currentTarget.dataset.itemId;
  const findVariant = window.cart.items.find((e) => e.id == variantId);
  // const variantPrice = findVariant.price;
  // let qtyValue = findVariant.quantity;
  findVariant.quantity += 1;
  Shopify.changeItem(variantId, findVariant.quantity, function (e) {
    // checkBogo()
    updateSubscriptionSavings();
    // updateAutoSavings15()
    updateShippingSavings();
    updateLineItem(variantId);
    updateCartSubtotal();
    updateCouponSavings();
    updateTotalSavings();
    countSubscriptionItems()
    updateCheckoutButton();
  });
});

// Sets quantity of line item if entere in input
$('.cart-item__quantity').on('input', function (e) {
  const variantId = e.currentTarget.dataset.itemId;
  const findVariant = window.cart.items.find((e) => e.id == variantId);
  const variantPrice = findVariant.price;
  let qtyValue = e.currentTarget.value;
  findVariant.quantity = qtyValue;
  Shopify.changeItem(variantId, qtyValue, function (e) {
    updateSubscriptionSavings();
    // updateAutoSavings15();
    updateShippingSavings();
    updateLineItem(variantId);
    updateCartSubtotal();
    updateCouponSavings();
    updateTotalSavings();
    countSubscriptionItems()
    updateCheckoutButton();
  });
});

// Updates card subtotal
function updateCartSubtotal(discountAmount, discountType) {
  let countedAmount = 0;
  let qtyItems = 0;
  window.cart.items.forEach((item) => {
    qtyItems = qtyItems + item.quantity;
    let added = item.quantity * item.price;
    countedAmount = countedAmount + added;
  });

  window.cart.item_count = qtyItems;
  updateShippingFee( false )
  renderEmptyCart();
  let subtotal = Number(countedAmount / 100);
  let economyShipping = window.cart.economyShipping || 0
  subtotal = subtotal + Number( economyShipping )

  if (window.cart.couponSavings) {
    subtotal = subtotal - window.cart.couponSavings;
  }

  $('#cart__total-price').text(Number(subtotal).toFixed(2));
  $('#cart__total').attr('data-total', subtotal);
  window.cart.total_price = countedAmount / 100;
  countSubscriptionItems()
  updateCheckoutButton();
}

// We can run the discount checker here
// Each time the func runs we should just grab the current subtotal the run the discount against it
function updateCouponSavings() {
  let currentTotal = window.cart.total_price;
  // Get the discount value
  if (window.sessionStorage.getItem('discountAmount')) {
    let discountValue = window.sessionStorage.getItem('discountAmount');
    let discountType = window.sessionStorage.getItem('discountType');

    if (discountType == '%') {
      currentTotal = currentTotal * (discountValue / 100);
    } else {
      // currentTotal = currentTotal - discountValue;
      currentTotal = discountValue / 100
    }

    let couponSavings = Number( currentTotal ).toFixed( 2 )
    let _html = `<span class="saving-label">Coupon Savings:</span> <span class="saving-amount">$${couponSavings}</span>`

    if ( couponSavings == 0 ) _html = ``
    $( '#cart-coupon_coupon-savings' ).html( _html )
    window.cart.couponSavings = Number(couponSavings);

    if ( _html !== '' ) renderSavingsCalculator()
  } else {
    $( '#cart-coupon_coupon-savings' ).html( `` )
    // $('#cart-coupon_coupon-savings').html(`<span class="saving-label">Coupon Savings:</span> <span class="saving-amount">$0.00</span>`);
    window.cart.couponSavings = Number(0.00);
  }
  updateTotalSavings();
}

function updateTotalSavings() {
  const shipping = window.cart.shippingSavings || 0;
  const coupon = window.cart.couponSavings || 0;
  const subscription = window.cart.subscriptionSavings || 0;
  const autosavings = window.cart.autosavings || 0;
  const total = Number(shipping + coupon + subscription + autosavings).toFixed(2);
  let _html = `<span class="saving-label md:h5">Your Total Savings:</span> <span class="saving-amount md:h5">$${total}</span>`

  if ( total < 1 ) {
    _html = ``
    renderSavingsCalculator( false )
  }

  $( '#cart-coupon_total-savings' ).html( _html )
  updateCartSubtotal()
}

// Checks for discount code existence
const fetchDiscount = async (discountCode) => {
  const response = await fetch(
    `https://sf-discount-checker.refactorthis.workers.dev/${discountCode}`
  );
  const data = await response.json();
  return data;
};

const parsePriceRule = (url) => {
  const priceRule = url.split('/').indexOf('price_rules');
  return url.split('/')[priceRule + 1];
};

//Gets the price rule info from serverless function
const fetchPriceRule = async (priceRule) => {
  const response = await fetch(
    `https://sf-getpricerule.refactorthis.workers.dev/${priceRule}`
  );
  const data = await response.json();
  return data;
};

// Displays if discount does not exist
const submittedDiscountError = ( hasDenied = true ) => {
  const deniedAlert = document.getElementById('cart__coupon-error');
  document.getElementById('cart__coupon-success').classList.add('d-none');
  if ( hasDenied ) deniedAlert.classList.remove('d-none');
};

//Displays if discount does exist
const submittedDiscountSuccess = (discount) => {
  fetch( '/cart.js' ).then( r => r.json() ).then( ( data ) => {
    window.cart = data
    /* if ( isCodeBogo() ) {
      checkBogo()
    } else {
      removeBogo( false )
    } */

    let value = Math.abs(discount.price_rule.value) * 1;
    let valueType = discount.price_rule.value_type;
    if (valueType === 'percentage') {
      value = value + '%';
      valueType = '%';
    } else {
      value = '$' + value;
      valueType = '$';
    }
    value = value.replace(/\D/g, '');
    window.cart.discountAmount = value;
    window.cart.discountType = valueType;
    window.sessionStorage.setItem('discountAmount', value);
    window.sessionStorage.setItem('discountType', valueType);
    document.getElementById('cart__coupon-error').classList.add('d-none');
    document.getElementById('cart__coupon-error').classList.remove('d-block');
    document.getElementById('cart__coupon-error-invalid').classList.add('d-none');
    document.getElementById('cart__coupon-error-invalid').classList.remove('d-block');
    const successAlert = document.getElementById('cart__coupon-alert');
    successAlert.innerHTML = `<div id="cart__coupon-success" class="mt-1 alert alert-success">Congratulations! You saved ${value}${valueType}!</div>`;
    
    updateShippingSavings();
    updateSubscriptionSavings();
    updateCartSubtotal();
    updateCouponSavings();

    setTimeout( function() {
      $( '#calculator-loading' ).hide()
      $( '#calculator-content' ).show()
    }, 3000 )
  } )
};

/**
 * @description update the cart table to display the free product
 * @param items cart items added to cart
 */
function displayFreeProdInTable( items ) {
  const itemAdded = items.find( x => x.id == freeItemId )
  loadCart().then( () => {
    if ( itemAdded ) {
      const handle = itemAdded.handle
      $.getJSON( `/products/${handle}.js`, function( product ) {
        const variant = product.variants[0]
        const image = product.featured_image
        const variantId = variant.id
        const title = product.title
        const variantTitle = variant.title
        const _tempPrice = Number( product.price / 100 ).toFixed( 2 )
        const origPrice = product.price
        const price = `$${_tempPrice}`
        const quantity = 1
        const _itemTotal = Number( ( Number( quantity ) * Number ( product.price ) ) / 100 ).toFixed( 2 )
        const itemTotal = `$${_itemTotal}`
        const itemHtml = `
          <div class="cart__item d-flex flex-column flex-md-row my-3 my-sm-1 pb-1" id="cart__item-${variantId}-container">
            <div class="cart__item-primary-info col-md-5 pl-4">
              <span class="cart__item-delete" data-item-id="${variantId}">
                ${icons.trash}
              </span>
              <img loading="lazy" src="${image}" class="img-fluid" alt="" srcset="" style="width: 150px;" />
              <div class="ml-2">
                <div>
                  <a href="/products/${handle}?variant=${variantId}">${title}</a>
                </div>
                <div class="font-weight-normal">${variantTitle}</div>
              </div>
            </div>
            <div class="cart__item-secondary-info align-items-center justify-content-center">
              <table class="table">
                <thead>
                  <tr class="text-center">
                    <th class="cart__item-info-titles pull-initial md:px-0" scope="col">Price</th>
                    <th class="cart__item-info-titles text-center" scope="col"><span class="xs:ml-10px">QTY</span></th>
                    <th class="cart__item-info-titles pull-endmd:px-0" scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center md:px-0">${price}</td>
                    <td class="cart-item__quantity col">
                      <div class="input-group mx-auto justify-content-center d-flex align-items-center flex-row">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-left-minus btn btn-dark btn-number disabled"
                            data-item-id="${variantId}" data-price="${origPrice}"
                            data-type="minus" data-field="" disabled>
                            <span>${icons.minus}</span>
                          </button>
                        </span>
                        <input type="text" id="quantity-${variantId}"
                          data-price="${origPrice}" data-item-id="${variantId}"
                          name="quantity" class="form-control text-center cart-item__quantity input-number disabled" style="min-width: 42px"
                          value="${quantity}" min="1" disabled /><span class="input-group-btn">
                          <button type="button" class="quantity-right-plus btn btn-primary btn-number disabled"
                            data-item-id="${variantId}" data-price="${origPrice}"
                            data-type="plus" data-field="" disabled>
                            <span>${icons.plus}</span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td class="cart-item__subtotal text-center col md:px-0" id="subtotal-${variantId}">
                      ${itemTotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        `

        $( `[data-cart="cart-table"]` ).prepend( itemHtml )
        $( '#calculator-loading' ).hide()
        $( '#calculator-content' ).show()
      } )
    }
  } )

}
//TODO: Come back to this to have it update all prices in cart

const changeSubtotal = (discountAmount, discountType) => {
  // Gets current total
  let subtotal = window.cart.original_total_price;
  let discountedPrice = window.cart.total_price;
  if (discountType === 'percentage') {
    discountedPrice = subtotal - (subtotal * discountAmount) / 100;
    $('#cart__total-price').text(Number(discountedPrice));
    $('#cart__total-price').attr('data-total', Number(discountedPrice));
  }
};

const checkDiscountCode = async () => {
  /* if ( isCodeBogo() ) {
    $( '#calculator-loading' ).show()
    $( '#calculator-content' ).hide()
  } */
  const discountCodeTemp = document.getElementById( 'cart__coupon-code' )
  const discountCode = discountCodeTemp ? discountCodeTemp.value : ''

  if ( ! discountCode ) {
    window.sessionStorage.discountCode = ''
    sessionStorage.setItem( 'discountCode', '' )
    window.cart.discountAmount = 0
    window.cart.discountType = 'percentage'
    window.sessionStorage.setItem( 'discountAmount', 0 )
    window.sessionStorage.setItem( 'discountType', 'percentage' )
    updateCartSubtotal()
    updateCouponSavings()
    updateTotalSavings()
    return submittedDiscountError( false )
  }

  const requestDiscount = await fetchDiscount(discountCode);
  if (requestDiscount.errors) {
    /* if ( isCodeBogo() ) {
      $( '#calculator-loading' ).hide()
      $( '#calculator-content' ).show()
    } */
    return submittedDiscountError();
  }
  // Set discount code in session
  window.sessionStorage.discountCode = discountCode;
  sessionStorage.setItem('discountCode', discountCode);
  // Append the code checkout button link
  //else we need to make a new request with the url provided
  // No need for parsePriceRule as we already have the priceRule in discountCode
  // const priceRuleId = parsePriceRule(requestDiscount.url)
  const requestPriceRule = await fetchPriceRule(
    requestDiscount.discount_code.price_rule_id
  );
  
  const priceRule = requestPriceRule.price_rule
  const priceRuleExpire = priceRule.ends_at

  if ( priceRuleExpire ) {
    let currentDate = new Date();
    let expiryDate = new Date( priceRuleExpire );

    if ( expiryDate < currentDate ) {
      window.sessionStorage.discountCode = ''
      sessionStorage.setItem( 'discountCode', '' )
      window.cart.discountAmount = 0
      window.cart.discountType = 'percentage'
      window.sessionStorage.setItem( 'discountAmount', 0 )
      window.sessionStorage.setItem( 'discountType', 'percentage' )
      updateCartSubtotal()
      updateCouponSavings()
      return submittedDiscountError()
    }
  }

  submittedDiscountSuccess(requestPriceRule);
};

document.getElementById('cart__apply-coupon').addEventListener('click', () => {
  checkDiscountCode();
});

// check if discount code already exists in session storage
if (window.sessionStorage.discountCode) {
  document.getElementById('cart__coupon-code').value =
    sessionStorage.getItem('discountCode');
  checkDiscountCode();
}

// Counts the current subscription items in cart
function countSubscriptionItems() {
  let counter = 0;
  window.cart.items.forEach((item) => {
    if (!$.isEmptyObject(item.properties)) {
      counter = counter + item.quantity;
    }
  });
  window.cart.subscriptionCount = counter;
  return counter;
}

function getRealPriceNonSub( variantId, type = 'shaker' ) {
  let realPrice = 0
  const shakerPrices = [
    {
      title: 'Shaker Bottle',
      id: 30297551274036,
      offPrice15: 2.64,
    },
  ]

  const shirtPrices = {
    offPrice15: 4.41,
    prices: [ '31048149368926', '31048149401694', '31048149434462', '31048149467230', '31048149499998', '31048149532766', '31048149565534', '31048149598302', '31048149631070', '31048149663838', '31048149696606', '31048149729374', '31048149762142', '31048149794910', '31048149827678', '31048149860446', '31048149893214', '31048149925982', '31048149958750', '31048149991518', '31048150024286', '31048150057054', '31048150089822', '31048150122590', '31048204189790', '31048204222558', '31048204320862', '31048204353630', '31048204451934', '31048204484702', '31048204583006', '31048204615774' ]
  }

  if ( type == 'shaker' ) {
    shakerPrices.forEach( ( x ) => {
      if ( x.id == variantId ) realPrice = x.offPrice15
    } )

  } else if ( type == 'shirt' ) {
    realPrice = ( shirtPrices.prices.includes( variantId.toString() ) ) ? shirtPrices.offPrice15 : 0

  }

  return realPrice
}

function getRealPrice( variantId, type = 'real', oneTime = false ) {
  const realPriceArray = [
    {
      title: 'Fruit Tub',
      // id: 31511156981854,
      id: 39553709113438,
      oneTimeId: 14944236732468,
      originalPrice: 39.95,
      offPrice: 9.98,
      offPrice10: 3.99,
      offPrice15: 5.99,
      offPrice15New: 7.05
    },
    {
      title: 'Fruit Packets',
      // id: 31511156916318,
      id: 39553708818526,
      oneTimeId: 14944190464052,
      originalPrice: 46.7,
      offPrice: 11.68,
      offPrice10: 4.67,
      offPrice15: 7.01,
      offPrice15New: 8.3
    },
    {
      title: 'Orange Tub',
      // id: 31511156850782,
      id: 39553704001630,
      oneTimeId: 14944248922164,
      originalPrice: 39.95,
      offPrice: 9.98,
      offPrice10: 3.99,
      offPrice15: 5.99,
      offPrice15New: 7.05
    },
    {
      title: 'Orange Packets',
      // id: 31511156818014,
      id: 39553709178974,
      oneTimeId: 14944206553140,
      originalPrice: 46.7,
      offPrice: 11.68,
      offPrice10: 4.67,
      offPrice15: 7.01,
      offPrice15New: 8.3
    },
    /*
     * Commented because variant id is one time 
    {
      title: 'Greens Staging',
      id: 31159773855838,
      originalPrice: 39.95,
      offPrice: 9.98,
      offPrice: 9.98,
      offPrice15: 5.99,
      offPrice15New: 7.05
    }, */
    {
      title: 'Greens Live',
      id: 31549933453406,
      oneTimeId: 31159773855838,
      originalPrice: 39.95,
      offPrice: 9.98,
      offPrice10: 3.99,
      offPrice15: 5.99,
      offPrice15New: 7.05
    },
    {
      title: 'Greens Live',
      id: 31549933453406,
      oneTimeId: 31159773855838,
      originalPrice: 39.95,
      offPrice: 9.98,
      offPrice10: 3.99,
    },
    {
      title: 'Chickpea',
      id: 31486685085790,
      oneTimeId: 31159776706654,
      originalPrice: 47.99,
      offPrice: 12,
      offPrice10: 4.79,
      offPrice15: 7.2,
      offPrice15New: 8.48
    },
    {
      title: 'Collagen',
      id: 31486686232670,
      oneTimeId: 31159775527006,
      originalPrice: 32.95,
      offPrice: 8.23,
      offPrice10: 3.29,
      offPrice15: 4.94,
      offPrice15New: 5.65
    },
    {
      title: 'Capsules',
      // id: 31511156883550,
      id: 39553709211742,
      oneTimeId: 14944270942260,
      originalPrice: 39.95,
      offPrice: 10.5,
      offPrice10: 3.99,
      offPrice15: 6.3,
      offPrice15New: 7.05
    },
    {
      title: 'Fish Oil',
      id: 32267890950238,
      oneTimeId: 31159778541662,
      originalPrice: 29.95,
      offPrice: 7.48,
      offPrice10: 2.99,
      offPrice15: 4.49,
      offPrice15New: 5.3
    },
    {
      title: 'Ultimate Stack - Fruit Tub',
      id: 39594796843102,
      offPrice10: 19.06,
    },
    {
      title: 'Ultimate Stack - Fruit Pack',
      id: 39594797301854,
      offPrice10: 19.74,
    },
    {
      title: 'Ultimate Stack - Orange Tub',
      id: 39594798415966,
      offPrice10: 19.06,
    },
    {
      title: 'Ultimate Stack - Orange Pack',
      id: 39594799202398,
      offPrice10: 19.74,
    },
    {
      title: 'Ultimate Stack - Capsule',
      id: 39594797727838,
      offPrice10: 19.06,
    },
    {
      title: 'Essentials Bundle - Fruit Tub',
      id: 39594523918430,
      offPrice10: 7.98,
    },
    {
      title: 'Essentials Bundle - Fruit Pack',
      id: 39594524016734,
      offPrice10: 8.66,
    },
    {
      title: 'Essentials Bundle - Orange Tub',
      id: 39594523951198,
      offPrice10: 7.98,
    },
    {
      title: 'Essentials Bundle - Orange Pack',
      id: 39594523983966,
      offPrice10: 8.66,
    },
    {
      title: 'Essentials Bundle - Capsule',
      id: 39594736910430,
      offPrice10: 7.98,
    },
    {
      title: 'Anti Aging - Fruit Tub',
      id: 39597189726302,
      offPrice10: 11.28,
    },
    {
      title: 'Anti Aging - Fruit Pack',
      id: 39597189529694,
      offPrice10: 11.96,
    },
    {
      title: 'Anti Aging - Orange Tub',
      id: 39597189595230,
      offPrice10: 11.28,
    },
    {
      title: 'Anti Aging - Orange Pack',
      id: 39597189660766,
      offPrice10: 11.96,
    },
    {
      title: 'Anti Aging - Capsule',
      id: 39597189562462,
      offPrice10: 11.28,
    },
    {
      title: 'Protein Stack',
      id: 39594521755742,
      offPrice10: 8.09,
    },
    {
      title: 'Immune Health - Fruit Tub',
      id: 39594529882206,
      offPrice10: 10.97,
    },
    {
      title: 'Immune Health - Fruit Pack',
      id: 39594529849438,
      offPrice10: 11.65,
    },
    {
      title: 'Immune Health - Orange Tub',
      id: 39594529783902,
      offPrice10: 10.97,
    },
    {
      title: 'Immune Health - Orange Pack',
      id: 39594529751134,
      offPrice10: 11.65,
    },
    {
      title: 'Immune Health - Capsule',
      id: 39594739499102,
      offPrice10: 10.97,
    },
  ];

  let realPrice = undefined 
  if ( ! oneTime ) {
    realPrice = realPriceArray.find( ( item ) => item.id == variantId )
  } else {
    realPrice = realPriceArray.find( ( item ) => item.oneTimeId == variantId )
  }
  if ( realPrice == undefined ) return 0

  if ( type == 'off' ) {
    return realPrice.offPrice

  } else if ( type == 'real' ) {
    return realPrice.originalPrice

  } else if ( type == 'new-inflated-15' ) {
    return realPrice.offPrice15New

  } else if ( type == 'off-10' ) {
    return realPrice.offPrice10

  } else {
    return realPrice.offPrice15
  }
}

function getSubscriptionSavingsOld() {
  let total = 0;
  window.cart.items.forEach((item) => {
    if (typeof item.properties != undefined) {
      let realPrice = getRealPrice(item.id);
      total = total + realPrice * item.quantity;
    }
  });
  return Number(total / 10).toFixed(2);
}

function getSubscriptionSavingsNew() {
  let total = 0
  window.cart.items.forEach( ( item ) => {
    if ( typeof item.properties != undefined ) {
      let realPriceOff10 = getRealPrice( item.id, 'off-10' )
      total = ( realPriceOff10 * item.quantity ) + total
    }
  } )
  
  return ( Math.round( total * 100 ) / 100 ).toFixed( 2 )
}

function getAutoSavings15() {
  let total = 0
  let _oneTimeIds = [ 14944236732468, 14944190464052, 14944248922164, 14944206553140, 31159773855838, 31159776706654, 31159775527006, 14944270942260, 31159778541662 ]
  let _subIds = [ 39553709113438, 39553708818526, 39553704001630, 39553709178974, 31549933453406, 31486685085790, 31486686232670, 39553709211742, 32267890950238 ]

  window.cart.items.forEach( ( item ) => {
    let _type = null
    let _oneTime = false
    if ( item.handle.includes( 'shaker' ) ) _type = 'shaker'
    if ( item.handle.includes( 'shirt' ) ) _type = 'shirt'
    if ( _oneTimeIds.indexOf( item.id ) !== -1 ) _oneTime = true

    offPrice = ( _type ) ? getRealPriceNonSub( item.id, _type ) : getRealPrice( item.id, 'new-inflated-15', _oneTime )
    total = ( offPrice * item.quantity ) + total
  } )

  return ( Math.round( total * 100 ) / 100 ).toFixed( 2 )
}

function updateAutoSavings15() {
  const amount = getAutoSavings15()
  $('#cart__auto-savings').html(`<span class="saving-label">Automatic Savings of 15%:</span> <span class="saving-amount"> $${amount}</span>`);
  window.cart.autosavings = Number( amount )
}

function updateSubscriptionSavings() {
  const amount = getSubscriptionSavingsNew();
  let _html = `<span class="saving-label">Subscription Savings:</span> <span class="saving-amount">$${amount}</span>`

  if ( amount == 0 ) _html = ``
  $( '#cart__subscription-savings' ).html( _html )
  window.cart.subscriptionSavings = Number(amount);
}

function updateShippingSavings() {
  // const count = countSubscriptionItems();
  // const total = ( count > 0 ) ? Number( 5.50 ).toFixed( 2 ) : Number( 0.00 ).toFixed( 2 )
  // const total = Number(count * 5.5).toFixed(2);
  let total = subscriptionShippingSavings()
  let _html = `<span class="saving-label">Subscription Shipping Savings:</span> <span class="saving-amount"> $${total}</span>`

  if ( countSubscriptionItems() < 1 ) {
    total = 0
  }

  if ( total == 0 ) _html = ``
  $( '#cart__shipping-savings' ).html( _html )
  window.cart.shippingSavings = Number( total )
}
// Dont need these anymore I believe
// function reduceSubscriptionSavings() {
//   let counter = countSubscriptionItems() - 1;
//   $('#cart__subscription-savings').text(
//     `Subscription Savings: $${counter * 7.95}`
//   );
// }

// function increaseSubscriptionSavings() {
//   countSubscriptionItems();
//   let counter = window.cart.subscriptionCount + 1;
//   $('#cart__subscription-savings').text(
//     `Subscription Savings: $${counter * 7.95}`
//   );
// }
function updateLineItem(itemId) {
  let findVariant = window.cart.items.find((e) => e.id == itemId);
  if ( findVariant ) {
    let { id, quantity, price, final_line_price } = findVariant;
    final_line_price = quantity * price;
    $(`#quantity-${id}`).val(quantity);
    $(`#subtotal-${id}`).text(Shopify.formatMoney(final_line_price));
  }
}

function updateCheckoutButton() {
  const discountCodeTemp = document.getElementById( 'cart__coupon-code' )
  const discountCode = discountCodeTemp ? discountCodeTemp.value : ''

  if ( window.cart.subscriptionCount > 0 ) {
    let paramCart ='&cart_token=' + (document.cookie.match('(^|; )cart=([^;]*)') || 0)[2];
    checkoutUrl = `https://checkout.rechargeapps.com/r/checkout?myshopify_domain=sportformula.myshopify.com${paramCart}&discount=${discountCode}`

    $('.checkout-buttons').attr('href',`https://checkout.rechargeapps.com/r/checkout?myshopify_domain=sportformula.myshopify.com${paramCart}&discount=${discountCode}`);
  } else {
    checkoutUrl = `/checkout?discount=${discountCode}`
    $('.checkout-buttons').attr('href', `/checkout?discount=${discountCode}`);
  }
}

function renderEmptyCart() {
  if (window.cart.items.length == 0) {
    $('#cart-page__container').html(`
      <div class="container text-center my-5">
        <h1>Shopping cart is empty</h1>
        <a class="btn btn-primary btn-lg text-uppercase" href="/collections/formula">Continue Shopping</a>
      </div>
    `);
  }
}


/**
 * @description disable quantity for free items
 */
function disableFreeItems() {
  freeItemIdsDisable.forEach( function( id ) {
    const items = $( '[data-row="cart-item"]' )
    items.each( function() {
      const dataId = $( this ).data( 'row-id' )

      if ( id == dataId ) {
        $( `button[data-item-id="${dataId}"]` ).attr( 'disabled', true )
        $( `button[data-item-id="${dataId}"]` ).addClass( 'disabled' )

        $( `input[data-item-id="${dataId}"]` ).attr( 'disabled', true )
        $( `input[data-item-id="${dataId}"]` ).addClass( 'disabled' )
      }
    } )
  } )
}

/**
 * @description Computes the Subscription Shipping Savings on Subscription items based on their weight
 * @returns {Number}
 */
 function subscriptionShippingSavings() {
  let total = 0
  let subscriptions = 0
  const toConvert = 0.0625
  const shippingRules = [
    { type: 'lite', min: 0, max: 1, price: 7.95 },
    { type: 'medium', min: 1.01, max: 4, price: 11.90 },
    { type: 'heavy', min: 4.01, max: 999999, price: 18.50 }
  ]

  window.cart.items.forEach( ( item ) => {
    if ( ! $.isEmptyObject( item.properties ) ) {
      const weight_oz = _subItems.find( x => x.id == item.id )
      const temp_weight = ( weight_oz ) ? weight_oz.weight : 0
      const qty = item.quantity
      const weight = ( temp_weight ) * qty
      const lb = weight * toConvert
      total = Number( total ) + Number( lb )
      subscriptions = subscriptions + 1
    }
  } )

  total = ( isNaN( total ) ) ? 0 : Number( total ).toFixed( 4 )
  const shippingRule = shippingRules.find( x => total >= x.min && total <= x.max )
  // const price = ( subscriptions > 0 ) ? shippingRule.price : 0
  let price = 0

  if ( subscriptions > 0 || window.cart.discountAmount ) {
    price = shippingRule.price
    renderSavingsCalculator()

  } else {
    renderSavingsCalculator( false )
  }

  return Number( price ).toFixed( 2 )
}

/**
 * @description Updates shipping fee
 */
function updateShippingFee( hasUpdateCart = true ) {
  total = 0
  const toConvert = 0.00220462
  const shippingRules = [
    { type: 'lite', min: 0, max: 1, price: 7.95 },
    { type: 'medium', min: 1.01, max: 4, price: 11.90 },
    { type: 'heavy', min: 4.01, max: 999999, price: 18.50 }
  ]

  window.cart.items.forEach( ( item ) => {
    if ( $.isEmptyObject( item.properties ) ) {
      const qty = item.quantity
      const weight = ( item.grams ) * qty
      const lb = weight * toConvert
      total = Number( total ) + Number( lb )
    }
  } )

  total = Number( total ).toFixed( 2 )
  const shippingRule = shippingRules.find( x => total >= x.min && total <= x.max )
  let shippingFee = ``

  if ( total == 0 ) {
    shippingFee = ``
    window.cart.economyShipping = 0

  } else {
    const shippingRulePrice = Number( shippingRule.price ).toFixed( 2 )
    // shippingFee = `<span class="saving-label">Express Economy Shipping:</span> <span class="shipping-fee-amount"> $${shippingRulePrice}</span>`
    shippingFee = `
      <span class="saving-label mb-1">Express Economy Shipping: </span>
      <span class="shipping-fee-amount ml-2"> $${shippingRulePrice}</span>
    `
    window.cart.economyShipping = shippingRulePrice
  }

  $( '#cart__shipping-fee' ).html( shippingFee )
  if ( hasUpdateCart ) updateCartSubtotal()
}

$( document ).on( 'click', '.checkout__buttons.checkout-buttons', function(e) {
  e.preventDefault()
  $( '.checkout__buttons.checkout-buttons' ).attr( 'disabled', true )
  $( '.checkout__buttons.checkout-buttons' ).addClass( 'disabled' )
  
  checkForBundleProducts().then( ( res ) => {
    if ( res.length > 0 ) {
      addIndividualBundleProducts( res )
    } else {
      window.location.href = checkoutUrl
    }
  } )
} )

/**
 * @description Check for bundle products in cart items to add the 
 * individual products to checkout
 */
function checkForBundleProducts() {
  updateCheckoutButton()
  addToCarts = []
  const bundleItems = []
  return new Promise( ( resolve, reject ) => {
    fetch( '/cart.js' ).then( r => r.json() ).then( ( res ) => {
      const items = res.items
      items.forEach( ( item, index ) => {
        const isBundle = bundleProducts.find( x => x.id == item.id )
        if ( isBundle ) bundleItems.push( { items: isBundle.items, id: item.id, qty: item.quantity } )
        if ( index + 1 == items.length ) resolve( bundleItems )
      } )
    } )
  } )
}

/**
 * @description Add individual bundle products to cart before checkout
 * @param {*} bundleItems 
 */
 function addIndividualBundleProducts( bundleItems ) {
  const requests = []
  const mainBundleIds = []
  const toAddIds = []
  const changeFormData= { updates: {} }

  if ( addIndividualBundleProducts ) {
    bundleItems.forEach( ( bundle, index ) => {
      const items = bundle.items.map( x => ({
        id: x.id, quantity: bundle.qty, properties: x.properties || {}
      }) )
      const itemId = bundle.id
      items.forEach( ( _item ) => {
        toAddIds.push( _item )
      } )
      changeFormData.updates[ itemId.toString() ] = 0
      mainBundleIds.push( [ itemId, bundle.qty ] )
  
      if ( index + 1 == bundleItems.length ) {
        setTimeout( function() {
          const addFormData = {
            'items': toAddIds
          }
          const addJS = fetch( '/cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( addFormData )
          } ).then( res => { return res.json() } )
      
          const removeJS = fetch( '/cart/update.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( changeFormData )
          } ).then( res => { return res.json() } )

          requests.push( addJS )
          requests.push( removeJS )

          Promise.all( requests ).then( ( res ) => {
            fetch( '/cart/update.js', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify( changeFormData )
            } ).then( res => {
              window.localStorage.removeItem( 'bundle_products' )
              window.localStorage.setItem( 'bundle_products', JSON.stringify( mainBundleIds ) )
              window.location.href = checkoutUrl
            } )
            
          } )
        }, 2000 )
      }
    } )

  } else {
    window.location.href = checkoutUrl
  }

}

/**
 * @description Check the session and cart for Bundle Products to remove/add
 */
 function loadBundleProducts() {
  const toRemoveFormData = { updates: {} }

  return new Promise( ( resolve, reject ) => {
    let bundle_products = window.localStorage.getItem( 'bundle_products' )
    bundle_products = ( bundle_products ) ? JSON.parse( bundle_products ) : []
    if ( bundle_products.length > 0 ) {
      bundle_products.forEach( ( bundle, bundle_index ) => {
        const invIds =  bundleProducts.find( x => x.id == bundle[0] )
        if ( invIds && invIds.items ) {
          for ( let index = 0; index < invIds.items.length; index++ ) {
            toRemoveFormData.updates[ invIds.items[index].id ] = 0
          }
        }

        if ( bundle_index + 1 == bundle_products.length ) {
          window.localStorage.removeItem( 'bundle_products' )
          setTimeout( () => {
            fetch( '/cart/update.js', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify( toRemoveFormData )
            } ).then( res => {
              const bundle_items = { items: [] }
              bundle_products.forEach( ( _bundle, _bundle_index ) => {
                const bundle_data = bundleProducts.find( x => x.id == _bundle[0] )
                let _bundle_item = {
                  'id': _bundle[0],
                  'quantity': _bundle[1]
                }
                if ( bundle_data && 'type' in bundle_data == true ) {
                  _bundle_item['properties'] = rechargeProperties
                }
                bundle_items.items.push( _bundle_item )

                if ( _bundle_index + 1 == bundle_products.length ) {
                  fetch( '/cart/add.js', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( bundle_items )
                  } ).then( () => window.location.reload() )
                }
              } )
            } )
          }, 2000 )
        }
      } )
    } else {
      resolve()
    }
  } )
}

/**
 * @description Check cart item for bundle product to remove
 */
function allowOneBundle() {
  return new Promise( ( resolve, reject ) => {
    fetch( '/cart.js' ).then( r => r.json() ).then( res => {
      const _items = res.items
      const _addedBundleItems = []
      _items.forEach( ( _item, _item_index ) => {
        const _isBundle = bundleProducts.find( x => x.id == _item.id )
        if ( _isBundle ) _addedBundleItems.push( _isBundle )

        if ( _item_index + 1 == _items.length ) {
          if ( _addedBundleItems.length == 0 || _addedBundleItems.length == 1 ) {
            resolve( true )

          } else {
            const toRemoveFormData = { updates: {} }
            _addedBundleItems.shift()
            _addedBundleItems.forEach( _oldBundle => {
              toRemoveFormData.updates[_oldBundle.id] = 0
            } )
            
            fetch( '/cart/update.js', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify( toRemoveFormData )
            } ).then( () => window.location.reload() )
          }
        }
      } )
    } )
  } )
}

function delayRecountSubs() {
  let counter = 0
  let bool = true

  loadCart()
  window.cart.items.forEach( ( item ) => {
    if ( ! $.isEmptyObject( item.properties ) ) {
      counter = counter + item.quantity;
    }
  } )

  console.log( counter )
  if ( counter < 1 ) bool = false
  renderSavingsCalculator( bool )
}

function renderSavingsCalculator( display = true ) {
  const el = $( '#calculator--content-savings' )

  display ? el.show() : el.hide()
}

function updateCart( _checkBogo = true ) {
  // if ( _checkBogo ) checkBogo()
  updateCartSubtotal();
  updateSubscriptionSavings();
  // updateAutoSavings15();
  updateShippingSavings();
  getSubscriptionSavingsNew();
  // getAutoSavings15();
  updateCouponSavings();
  updateTotalSavings();
  countSubscriptionItems()
  updateCheckoutButton();

  disableFreeItems()
  updateShippingFee();
  renderEmptyCart();
}

function waitForElement( id, callback ) {
  let _int = setInterval( () => {
    if ( document.getElementById( id ).value ) {
      clearInterval( _int )
      callback()
    }
  }, 2000 )
}

waitForElement( 'form_state', function() {
  const form_state_value = document.getElementById( 'form_state' ).value
  const ids = form_state_value.split( ',' )

  Array.from( ids ).forEach( ( variantId ) => {
    const toRemove = `#cart__item-${variantId}-container`
    $( toRemove ).toggleClass( 'alert-danger' ).fadeOut(300, function () {
      $( this ).remove()
      const findVariant = window.cart.items.findIndex( ( e ) => e.id == variantId )
      findVariant.quantity = 0
      window.cart.items.pop( findVariant )
    } )
  } )
} )

// allowOneBundle().then( () => {
  loadBundleProducts().then( ( res ) => {
    loadCart()
  } )
// } )