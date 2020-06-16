// Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

// Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

// IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

// However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

// Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

// Note: You may assume there is no extra space or special characters in the input string.

// Example 1:
// Input: "172.16.254.1"

// Output: "IPv4"

// Explanation: This is a valid IPv4 address, return "IPv4".
// Example 2:
// Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"

// Output: "IPv6"

// Explanation: This is a valid IPv6 address, return "IPv6".
// Example 3:
// Input: "256.256.256.256"

// Output: "Neither"

// Explanation: This is neither a IPv4 address nor a IPv6 address.
// JavaScript	

//         }else{
//             return 'IPv4'
//         }
//     }
//     if(ipv6.length==8){
//          let res = []
//         for(let i=0;i<ipv6.length;i++){
//             var a = parseInt(ipv6[i],16)
//               let index = ipv6[i].charAt(0)
//               let regexp = /^[0-9a-fA-F]+$/;
//             if(ipv6[i].length>4){
//                  res.push(0)
//             }else if(ipv6[i].length<=4 && regexp.test(ipv6[i])){
//                 res.push(1)
//             }else{
//                 res.push(0)
// }
//         }
//         let newData = res.filter((arr)=>arr===0)
//         if(newData.length>0){
//             return 'Neither'
//         }else{
//             return 'IPv6'
//         }
//     }else{
//         return "Neither"
//     }
// };
// 1
// /**
// 2
//  * @param {string} IP
// 3
//  * @return {string}
// 4
//  */
// 5
var validIPAddress = function(IP) {
    let ipv4 = IP.split(".")
    let ipv6 = IP.split(':')
    let result = false
    if(ipv4.length===4){
        let res = []
        let index
        for(let i=0;i<ipv4.length;i++){
            index = ipv4[i].charAt(0)
            if(ipv4[i]=='0'){
                res.push(1)
            }else if(Math.sign(parseInt(ipv4[i]))===-0 ||Math.sign(parseInt(ipv4[i]))===-1 ||parseInt(ipv4[i])<0){
                res.push(0)
            }else if(ipv4[i]!== '1e1' && ipv4[i]<=255 && ipv4[i]>=0 && index!=0 && ipv4[i]!==''){
                res.push(1)
            }else{
                res.push(0)
            }
        }
        let newData = res.filter((arr)=>arr===0)
        if(newData.length>0){
            return 'Neither'
        }else{
            return 'IPv4'
        }
    }
    if(ipv6.length==8){
         let res = []
        for(let i=0;i<ipv6.length;i++){
            var a = parseInt(ipv6[i],16)
              let index = ipv6[i].charAt(0)
              let regexp = /^[0-9a-fA-F]+$/;
            if(ipv6[i].length>4){
                 res.push(0)
            }else if(ipv6[i].length<=4 && regexp.test(ipv6[i])){
                res.push(1)
            }else{
                res.push(0)
}
        }
        let newData = res.filter((arr)=>arr===0)
        if(newData.length>0){
            return 'Neither'
        }else{
            return 'IPv6'
        }
    }else{
        return "Neither"
    }
};