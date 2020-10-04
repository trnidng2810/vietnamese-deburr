const deburr = require('./deburr')

test("deburr 'déjà vu'", () => {
  expect(deburr('déjà vu')).toEqual('deja vu')
})

test("deburr vietnamese's complete set", () => {
  expect(deburr('aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ')).toEqual('aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAbBcCdDdDeEeEeEeEeEeEeEeEeEeEeEeEfFgGhHiIiIiIiIiIiIjJkKlLmMnNoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOpPqQrRsStTuUuUuUuUuUuUuUuUuUuUuUuUvVwWxXyYyYyYyYyYyYzZ')
})
