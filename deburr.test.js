const deburr = require('./deburr')

test("deburr 'déjà vu' to 'deja vu'", () => {
  expect(deburr('déjà vu')).toEqual('deja vu')
})

test("deburr vietnamese's complete set", () => {
  expect(deburr('aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ')).toEqual('aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAbBcCdDdDeEeEeEeEeEeEeEeEeEeEeEeEfFgGhHiIiIiIiIiIiIjJkKlLmMnNoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOpPqQrRsStTuUuUuUuUuUuUuUuUuUuUuUuUvVwWxXyYyYyYyYyYyYzZ')
})

test("deburr 'Hà Nội, Hồ Chí Minh' to 'Ha Noi, Ho Chi Minh'", () => {
  expect(deburr('Hà Nội, Hồ Chí Minh')).toEqual('Ha Noi, Ho Chi Minh')
})
