let row = ""

for (let i = 1; i < 6; i++) {
  for (let j = i; j >= 1; j--) {
    row += j + " "
  }
  console.log(row)
  row = ""
}
